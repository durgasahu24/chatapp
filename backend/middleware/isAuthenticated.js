import jwt from 'jsonwebtoken'
import { User } from '../model/user.model.js'

export const isAuthenticated = async (req, res, next) => {
    try {

        const token = req.cookie.token
        console.log(token)

        if (!token) {
            return res.status(400).json({ message: "user not authenticated : " })
        }



        const decodeToken = await jwt.verify(token, process.env.JWT_SECRET_KEY)

        if (!decodeToken) {

            return res.status(400).json({ message: "Invalid token" })
        }

        req.id = decodeToken.userId;

        next();


    } catch (error) {
        console.log("error in isAuthenticated : ", error.message);
    }

}