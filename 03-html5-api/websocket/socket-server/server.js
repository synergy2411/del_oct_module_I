var Server = require("websocket").server;
var http = require("http");

var socket = new Server({
    httpServer: http.createServer().listen(9090, () => console.log("Socket server started at PORT : 9090"))
})

socket.on("request", function (request) {
    var connection = request.accept(null, request.origin)
    connection.on("message", function (message) {
        console.log("Message : " + message.utf8Data)
        socket.broadcast(message.utf8Data);
    })
    connection.on("close", function () {
        console.log("Client disconnected")
    })
})