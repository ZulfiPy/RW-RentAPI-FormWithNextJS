import mongoose from "mongoose";
import { Schema, models, model } from "mongoose";

const taskSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    },
    priority: {
        type: String,
        required: [true, "Priority is required"]
    },
    status: {
        type: String,
        required: [true, "Status is required"]
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, {
    timestamps: true
});

const Task = models.Task || model('Task', taskSchema);

export default Task;