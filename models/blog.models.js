const mongoose = require("mongoose");
const validator = require("validator");
// const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const authorSchema = new mongoose.Schema({
    fullname: { type: String, maxlength: 25 },
    twitterHandle: { type: String },
    email: {
        type: String,
        required: true,
        maxlength: 50,
        validate: (value) => validator.isEmail(value),
    },
    image: {
        type: String,
        validate: (value) => validator.isURL(value),
    }
}, { _id: false })

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    authors: [authorSchema],
    content: { type: String, default: "" },
    publishedAt: { type: Date, default: null }
}, { timestamps: true })

const blogModel = mongoose.model("Blogs", blogSchema, "WebsiteBlogs");

module.exports = blogModel;