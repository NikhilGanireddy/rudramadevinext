import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    password: String,
    isAdmin: {type: Boolean, default: true},
})

const UserModel = mongoose.models.rudramadevinextjsusers || mongoose.model("rudramadevinextjsusers", UserSchema)

module.exports = UserModel