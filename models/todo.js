const mongoose = require("mongoose");

//1. creating schema

const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
    },

    catogery: {
        type: String,
        required: true,
    },

    dueDate: {
        type: String,
        required: true,
    },

    priority: {
        type: String,
        required: true,
    },

    taskColor: {
        type: String,
        required: true,
    },
});

// 2. creating collection
const TodoList = mongoose.model("TodoList", todoSchema);

//3. exporting our collection
module.exports = TodoList;
