const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    marked: {
        type: Boolean,
        default: false
    },
    text: {
        type: String,
        require: true
    }
}, {timestamps: true});

mongoose.model("tasks", TaskSchema);