import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
            .then(console.log("Connected to the database"))
            .then(console.log("Connected for the second time"))
    } catch (err) {
        console.log(err)
    }
}

export default connectDB