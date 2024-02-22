const Blogs = require('../models/blog.models');

const createNewBlog = async (req, res) => {
    const { title, authors } = req.body
    const newBlogDoc = new Blogs({ title: title, authors: authors });
    const result = await newBlogDoc.save()
    console.log(newBlogDoc);
    res.json(result);
}

const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blogs.find({});
        res.json(blogs);
    } catch (err) {
        res.status(404).json({ message: "Could not fetch blogs from DB", err });
    }
}

const deleteBlogWithId = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Blogs.findOneAndDelete({ _id: id });
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: "Couldn't delete blog post, Please try again" })
    }
}

const updateBlogWithId = async (req, res) => {
    try {
        const { id } = req.params;
        const filter = { _id: id }
        const update = req.body;

        const result = await Blogs.findOneAndUpdate(filter, update, { new: true });
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: "Couldn't save blog post. Please try again", err });

    }
}

module.exports = {
    createNewBlog,
    getAllBlogs,
    deleteBlogWithId,
    updateBlogWithId
}