const Post = require("../models/Post");

exports.createPost = async (req, res) => {
    try {
        const { title, content } = req.body;

        const post = await Post.create({
            title,
            content,
            author: req.user.id,
        });

        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message,
        });
    }
};

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate("author", "name email");

        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message,
        });
    }
};

exports.getPostById = async (req, res) => {
    try {

        console.log("Requested ID:", req.params.id);

        const post = await Post.findById(req.params.id).populate(
            "author",
            "name email"
        );

        if (!post) {
            return res.status(404).json({
                message: "Post not found",
            });
        }

        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message,
        });
    }
};

exports.updatePost = async (req, res) => {
    try {
        console.log("Request body:", req.body);
        const { title, content } = req.body;

        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).json({
                message: "Post not found",
            });
        }

        if (post.author.toString() !== req.user.id) {
            return res.status(403).json({
                message: "Not authorized",
            });
        }

        post.title = title || post.title;
        post.content = content || post.content;

        await post.save();

        res.status(200).json(post);

    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message,
        });
    }
};

exports.deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).json({
                message: "Post not found",
            });
        }

        if (post.author.toString() !== req.user.id) {
            return res.status(403).json({
                message: "Not authorized",
            });
        }

        await post.deleteOne();

        res.status(200).json({
            message: "Post deleted successfully",
        });

    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message,
        });
    }
};