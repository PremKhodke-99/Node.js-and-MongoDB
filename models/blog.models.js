const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: {type: String, required: true, unique: true},
    authors: {type: [String]},
    content: {type: String, default: ""},
    publishedAt: {type: Date, default: null}
})

const blogModel = mongoose.model("Blogs", blogSchema,"WebsiteBlogs");

module.exports = blogModel;