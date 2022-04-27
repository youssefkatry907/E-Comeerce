const app = require("express").Router();
const postValidation = require("../modules/post/post.validation")
const validate = require("../helpers/common.validation")
const postController = require("../controller/post.controller")
const upload = require("../helpers/fileUpload")
const isAuthorized = require("../config/isAuthorized");
const { ADD_POST, UPDATE_POST, GET_ALL_PENDING_POSTS, APPROVE_POST, DECLINE_POST } = require("../endPoints/endPoints")

app.post("/addPost/:userId", [isAuthorized(ADD_POST), upload.single("avatar"),
validate(postValidation.addPostValidation)], postController.addPost);

app.put("/updatePost/:postId", [isAuthorized(UPDATE_POST),
validate(postValidation.updatePostValidation)], postController.updatePost);

app.delete("/deletePost/:postId", postController.deletePost);
app.get("/getAllPendingPosts", [isAuthorized(GET_ALL_PENDING_POSTS)],
    postController.getAllPendingPosts);

app.get("/getPostById/:postId", postController.getPostById)

app.put("/approvePost/:postId", [isAuthorized(APPROVE_POST)], postController.approvePost)
app.put("/declinePost/:postId", [isAuthorized(DECLINE_POST)], postController.declinePost)

module.exports = app;
//role based access control