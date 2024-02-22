const router = require('express').Router();
const { createNewBlog, getAllBlogs } = require('../controller/blogs.controller');

router.get("/", getAllBlogs);
router.post("/new", createNewBlog);

module.exports = router;
