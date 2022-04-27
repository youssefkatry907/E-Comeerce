const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
        postDescription: { type: String, required: true },
        postTitle: { type: String, required: true },
        postStatus: { type: String, enum: ["pending", "approved", "decliened"], required: true, default: "pending" },
        postImageUrl: [{ type: String }],
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" }
    }
)

module.exports = mongoose.model("post", postSchema);
