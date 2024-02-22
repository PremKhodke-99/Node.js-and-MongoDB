const Blogs = require("../models/blog.models");

class BlogService {
    save = async (doc) => {
        const result = await doc.save();
        return result;
    }

    create = async(body) => {
        const newDoc = new Blogs(body);
        const savedDoc = await this.save(newDoc);
        return savedDoc;
    }

    findAll = async () => {
        const allBlogs = await Blogs.find({});
        return allBlogs;
    }
}

module.exports = BlogService

/* const findAllBlogs = async () => {
    const allBlogs = await Blogs.find({});
    return allBlogs;
}

const saveDocument = async(doc) => {
    const result = await doc.save();
    return result;
}

const createBlogDocument = async (body) => {
    const newDoc = new Blogs(body);
    const saveDoc = await saveDocument(newDoc);
    return saveDoc;
}

module.exports = {
    findAllBlogs,
    createBlogDocument
}
*/