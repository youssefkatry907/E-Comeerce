const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const saltRounds = 5;

const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    userName: { type: String, required: true },
    role: { type: String, default: "user" },
    age: Number,
    nationalID: { type: Number, required: true, unique: true },
    token : {type : String},
}, { timestamps: true });

userSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, saltRounds);
    next();
})

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
