import { Schema, model } from "mongoose";

const commentSchema = new Schema({
    author: {
        type: String,
        required: [true, "NickName is required"],
        maxLength: [100, "NickName cannot exced 100 characters"],
    },
    comment: {
        type: String,
        required: [true, "Comment is required"],
        maxLength: [800, "Comment cannot exced 800 characters"]
    },
    publication: {
        type: Schema.Types.ObjectId,
        ref: "Publication",
        required: [true, "Associated publication is required"]
    },
    commentDate: {
        type: Date,
        default: Date.now()
    },
})

export default model("Comment", commentSchema)