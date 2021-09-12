const express = require("express");

const app = express();

app.use(express.json());

app.use((req, res, next) =>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, PUT, OPTIONS");
    next();
});

app.post("/api/posts", (req, res,next) => {
    const posts = req.body;
    console.log(posts);
    res.status(201).json({
        message: "Post added successfully"
    })
});

app.use("/api/posts", (req, res, next) => {
    const posts = [
        {id : "asday12j234" , title: "First Server-Side Post", content: "This is coming from server"},
        {id : "asdas12j234" , title: "Second Server-Side Post", content: "This is coming from server"},
    ];
    res.json({
        message : "Posts fetched successfully",
        posts
    });
});

module.exports = app;