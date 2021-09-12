const express = require("express");
const Post = require("./models/posts");
const app = express();

app.use(express.json());

app.use((req, res, next) =>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, PUT, OPTIONS");
    next();
});

app.post("/api/posts", async (req, res,next) => {
    const post = new Post({
        title : req.body.title,
        content : req.body.content
    });
    console.log(post);
    const createdPost = await post.save();
    res.status(201).json({
        message: "Post added successfully",
        postId : createdPost._id,
    })
});

app.get("/api/posts", async (req, res, next) => {
    const posts = await Post.find({});
    res.json({
        message : "Posts fetched successfully",
        posts
    });
});

app.delete("/api/posts/:id", async (req, res, next) => {
    await Post.deleteOne({_id : req.params.id});
    res.json({
        message: "Post delete sucessfully"
    })
});

module.exports = app;