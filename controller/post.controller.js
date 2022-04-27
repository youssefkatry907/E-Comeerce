const Post = require("../modules/post/post.model")
const User = require("../modules/user/user.model")
const jwt = require("jsonwebtoken");

exports.addPost = async (req, res) => {
    try {
        let { postDescription, postTitle} = req.body
        console.log(req.body);
        await Post.create({ postDescription, postTitle, userId: req.params.userId, postImageUrl: req.file.path})
        res.status(201).send({ message: "Success" })
    }
    catch (err) { res.status(500).json({ message: "somthing went wrong ", err }) }
}
exports.updatePost = async (req, res) => {
    try {
        //console.log(req.user);
        let { postDescription, postTitle, postImageUrl } = req.body
        await Post.findByIdAndUpdate({ _id: req.params.postId }, { postImageUrl, postDescription, postTitle })
        res.status(201).send({ message: "Post updated successfully" })

    } catch (err) { res.status(500).json({ message: "somthing went wrong ", err }) }

}

exports.deletePost = async (req, res) => {
    try {
        await Post.findByIdAndDelete({ _id: req.params.postId });
        res.status(200).send({ message: "Post deleted" })
    }
    catch (err) { res.status(500).json({ message: "somthing went wrong ", err }) }
}

exports.getPostById = async (req, res) => {
    let post = await Post.find({ _id: req.params.postId });
    res.status(200).send({ message: "Success", post })
}

//approve post ,decline post

exports.approvePost = async (req, res) => {
    let postId = req.params.postId;
    await Post.findByIdAndUpdate({ _id: postId }, { postStatus: "approved" })
    res.status(201).send({ message: "post approved" });
}

exports.declinePost = async (req, res) => {
    let postId = req.params.postId;
    await Post.findByIdAndUpdate({ _id : postId }, { postStatus: "declined" })
    res.status(201).send({ message: "post declined" });
}

exports.getAllPendingPosts = async (req, res) => {
    try {
        let allPendingPosts = await Post.find({ postStatus: "pending" });
        res.status(200).send({ message: "Success", allPendingPosts })
    }
    catch (err) { res.status(500).json({ message: "somthing went wrong " }) }
}