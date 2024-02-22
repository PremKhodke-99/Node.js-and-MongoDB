const Blogs = require('../models/blog.models');
const BlogService = require('../services/blogs.service');
const BlogServiceInstance = new BlogService();

const createNewBlog = async (req, res) => {
    const { body } = req; 
    const result = await BlogServiceInstance.create(body);
    res.json(result);
}

const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogServiceInstance.findAll()
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

const searchBlog = async (req, res) => {
    const { title, authors } = req.query;
    try {
        const result = await Blogs.find({
            $or: [
                { title },
                { authors: { $elemMatch: { email: authors } } }
            ]
        });
        res.json(result);
    } catch (err) {
        res.status(500)
            .json({ message: "Coudn't fetch blog posts. Please try again", err })
    }
}

module.exports = {
    createNewBlog,
    getAllBlogs,
    deleteBlogWithId,
    updateBlogWithId,
    searchBlog
}
