import { User } from '../model/user.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {

    try {

        const { fullName, username, password, confirmPassword, gender } = req.body;

        if (!fullName || !username || !password || !confirmPassword || !gender) {
            return res.status(400).json(
                {
                    message: "All feilds are required :",
                }
            )
        }

        if (password !== confirmPassword) {
            return res.status(400).json({
                message: "pasword does not match",
            })
        }

        const user = await User.findOne({ username })

        if (user) {
            return res.status(400).json({
                message: "user already exist try different name : ",

            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const maleProfilePhoto = `https://avatar.iran.liara.run/public/boy?=${username}`
        const femaleProfilePhoto = `https://avatar.iran.liara.run/public/girl?=${username}`


        await User.create({
            fullName,
            username,
            password: hashedPassword,
            confirmPassword,
            gender,
            profilePhoto: gender === "male" ? maleProfilePhoto : femaleProfilePhoto
        })

        return res.status(201).json({
            message: "Account created successfully : ",
            success: true
        })

    } catch (error) {
        console.log("Error in register controller : ", error.message);
        return res.status(500).json({ message: "server error", error: error.message, success: false })
    }
}

export const login = async (req, res) => {

    try {
        const { username, password } = req.body;


        if (!username || !password) {
            return res.status(400).json({
                message: "All fields are required",
                success: false
            });
        }

        const user = await User.findOne({ username });

        if (!user) {
            return res.status(400).json({
                message: "Incorrect username or password",
                success: false
            });
        }

        const isPassword = await bcrypt.compare(password, user.password);

        if (!isPassword) {
            return res.status(400).json({
                message: "Incorrect username or password",
                success: false
            });
        }

        const tokenData = {
            userId: user._id
        };

        const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });

        return res.status(200)
            .cookie("token", token, {
                maxAge: 24 * 60 * 60 * 1000, // 1 day
                httpOnly: true,
                sameSite: 'Strict'
            })
            .json({
                success: true,
                message: "Login successful",
                _id: user._id,
                username: user.username,
                fullName: user.fullName,
                profilePhoto: user.profilePhoto,
                token
            });

    } catch (error) {

        return res.status(500).json({
            message: "Server error",
            success: false,
            error: error.message
        });
    }
};

export const logout = (req, res) => {
    try {

        return res.status(200).cookie("token", { maxAge: 0 }).json({ message: "user logout successfully" })

    } catch (error) {
        return res.status(500).json({ message: "server error ", success: false, error: error.message })
    }
}


export const getOtherUser = async (req, res) => {

    try {

        const loggedInUser = req.id;

        const otherUser = await User.find({ _id: { $ne: loggedInUser } }).select("-password")

        return res.status(200).json(otherUser)


    } catch (error) {

        return res.status(500).json({ message: "server error ", success: false, error: error.message })
    }
}
