import mongoose, { mongo } from "mongoose";

const tagSchema = new mongoose.Schema({
    name: String,
    color: String
})

const Tag = mongoose.model("Tag", tagSchema)

export default Tag