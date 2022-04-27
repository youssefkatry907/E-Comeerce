const express = require("express");
const morgan = require("morgan");
const Cors = require("cors")
require('dotenv').config();
const app = express();
app.use(express.json());

const postRoutes = require("./routes/post.routes")
const userRoutes = require("./routes/user.routes");



// app.use(session({ secret: process.env.SESSION_SECRET_KEY }));
require("./config/db.config");

//error handling middleware
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
        },
    });
});
app.use('/uploads', express.static('uploads'));

// log managment system 
app.use(morgan("dev"));

app.use(postRoutes);
app.use(userRoutes);

app.use(Cors);

//Cors Configuration
app.use(async (req, res, next) => {
    res.locals.session = req.session;
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");

    res.header("Access-Control-Allow-Credentials", true);
    res.header("Cache-Control", "no-store,no-cache,must-revalidate");
    res.header("Vary", "Origin");

    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, GET, PATCH, DELETE");
        return res.status(200).json({});
    }
});

//______________________________________________

let server = app.listen(process.env.PORT, () => console.log(`Server is up and running on port ${process.env.PORT}`));
var io = require('socket.io')(server);
io.on('connection', function (socket) {
    socket.broadcast.emit('newUser', 'New User Joined, Say Hi :D');
    socket.on('setUser', function (username) {
        console.log(username);
    });
    socket.on('chatMessage', function (msg) { // Send message
        io.emit('chatMessage', msg); //listen
        console.log(msg);
    });
});