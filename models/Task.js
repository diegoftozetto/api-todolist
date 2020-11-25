const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    name:{
        type: String,
        require: true
    }
});

mongoose.model("tasks", TaskSchema);