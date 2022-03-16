const mongoose = require("mongoose");


const ToolSchema = new mongoose.Schema({
    toolName: {
        type: String,
        // required: [true, "Tool name is required"],
        // minlength: [3, "Tool name must be at least 3 characters long"]
    },

    toolDescription: {
        type: String,
        // required: [true, "Description is required"],
        // minlength: [3, "Description must be at least 3 characters long"]
    },

    pictureUrl: {
        type: String,
        // required: [true, "Picture is required"],
    },
    location: {
        type: String,
        // required: [true, "Location is required"]
    },
    price: {
        type: Number,
        // required: [true, "Price is required"],
        // default: 1,
        // min: [1, "Price must be higher than 1 dollar to make this transactional"],
    },

    // startDate: {
    //     type: Date,
    //     required: [true, "What day is your tool available for offers?"],
    //     minlength: [10, "Give a yyyy-mm-dd date format"]
    // },

    // endDate: {
    //     type: Date,
    //     required: false,
    //     minlength: [10, "Give a yyyy-mm-dd date format"]
    // },
}, { timestamps: true });
const Tool = mongoose.model("Tool", ToolSchema);
module.exports = ToolSchema;