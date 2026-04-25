const socketIo = require("socket.io");

let io;




function initiateSocket(server) {
    io = socketIo(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    });
    io.on("connection", (socket) => {
        console.log(`New client connected:  + ${socket.id}`);

        socket.on("disconnect", () => {
            console.log(`Client disconnected:  + ${socket.id}`);
        });
    });
}

function sendMessageToSocketId(socketId, message) {
    if (io) {
        io.to(socketId).emit("message", message);
    } else {
        console.log("Socket.io is not initialized.");
    }
}

module.exports = { initiateSocket, sendMessageToSocketId };