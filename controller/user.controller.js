const User = require("../modules/user/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 5;

exports.signUp = async (req, res) => {
    try {
        const { email, password, userName, age, nationalID, role } = req.body;
        const user = await User.findOne({
            email
        });
        const nationalIDTaken = await User.findOne({
            nationalID
        });
        if (user) {
            await res.status(409).json({
                message: "Error, This email already exists",
                code: 409,
            })
        }
        else if (nationalIDTaken) {
            await res.status(409).json({
                message: "Error, This national ID already exists",
                code: 409,
            })
        }
        else {
            let newUser = new User({ email, password, userName, age, nationalID, role });
            await newUser.save();
            res.status(201).json({
                message: "Success, Account has been created successfuly!!",
                code: 201
            })
        }
    } catch (err) {
        res.status(500).json({ message: "somthing went wrong ", err })
    }
}
exports.logIn = async (req, res) => {
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
        res.status(400).json({ message: "Please enter a valid email" })
    }
    else {
        let match = await bcrypt.compare(password, user.password);
        if (match) {
            let token = jwt.sign({ _id: user._id, role: user.role }, "sherif");
            res.status(200).json({ message: "Success", token });
        }
        else {
            res.status(422).json({ message: "This password is invalid", password, match })
        }
    }
}


// route
// exports.logOut = async (req, res) => {
//     if (req.session) {
//         req.session.destroy();
//     }
// }