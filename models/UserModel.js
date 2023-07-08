import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        default: "Name"
    },
    hallTicket: {
        type: String,
        default: "Name"
    },
    room: {
        type: String,
        default: "Name"
    },
    year: {
        type: String,
        default: "Name"
    },
    branch: {
        type: String,
        default: "Name"
    },
    mobile: {
        type: String,
        default: "Name"
    },
    motherName: {
        type: String,
        default: "Name"
    },
    fatherName: {
        type: String,
        default: "Name"
    },
    motherMobile: {
        type: String,
        default: "Name"
    },
    fatherMobile: {
        type: String,
        default: "Name"
    },
    outings: {
        type: String,
        default: "Name"
    },
    messCharges: {
        type: String,
        default: "Name"
    },
    complaints: {
        type: Array,
    },
    password: String,
    isAdmin: {type: Boolean, default: false},
})

const UserModel = mongoose.models.rudramadevinextjsusers || mongoose.model("rudramadevinextjsusers", UserSchema)

module.exports = UserModel