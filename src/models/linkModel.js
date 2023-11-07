import mongoose, { mongo } from "mongoose";

const linkSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: true
    },
    link: { 
        type: String,
        required: true
    },
    favicon: {
        type: String
    },
    tagName: {
        type: Array,
        default: []
    },
    createAt: {
        type: Date,
        default: Date.now
    }
})

const Link = mongoose.model("Link", linkSchema)

export default Link