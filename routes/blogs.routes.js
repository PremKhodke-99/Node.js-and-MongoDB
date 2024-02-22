const router = require('express').Router();
const { createNewBlog, getAllBlogs, deleteBlogWithId, updateBlogWithId, searchBlog } = require('../controller/blogs.controller');

router.get("/", getAllBlogs);
router.get("/search", searchBlog)
router.post("/new", createNewBlog);
router.delete("/:id", deleteBlogWithId);
router.patch("/:id", updateBlogWithId)

module.exports = router;
