import { Schema, model } from "mongoose";

const publicationSchema =  new Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        maxLength: [75, "Title cannot exced 50 characters"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        maxLength: [600, "Description cannot exced 600 characters"]
    },
    course: {
        type: String,
        required: [true, "Course is required"],
        enum: ['TECNOLOGÍA', 'TALLER', 'TICS'], 
        uppercase: true,
    },
    author: {
            type: String,
            required: [true, 'Author name is required'],
            maxLength: [100, 'Author name cannot exceed 100 characters'],
        },
    date:{
        type: Date,
        default: Date.now()
    },
})


export default model("Publication", publicationSchema)