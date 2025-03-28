import mongoose from "mongoose";

const connectDb = async () => {
    try {

        await mongoose.connect(process.env.MONGO_URI);
        console.log('mongodb is connected : ');
        
    } catch (error) {
        console.log("error in mongodb : ",error.message);
    }
}

export default connectDb;