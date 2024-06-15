import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    clerkId: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,

    },
    username: {
        type: String,
    },
    biodata: {
        type: Object,
        default: {}
    }
})

const User = mongoose.models('user') || mongoose.model('user',userSchema);

export default User;