// This example does not support multiple clients, need some additional abstraction to add support. An easy way could just be maitaing an array of connections.
const http = require("http")

const WebSocketServer = require("websocket").server


const httpServer = http.createServer((req, res) =>{
    console.log("request came in!!")
})

//handshake
const webSocket = new WebSocketServer({
    "httpServer": httpServer
})

webSocket.on("request", request =>{
    //accept request from client
    //In the real world we might want to check for suspicious connections, but for the purpose of this example we are going to ignore that
    connection = request.accept(null, request.origin)
    console.log("request came in")
    // Run this in a debugger and add the connection.send line while the debug console has access to the connection object
    // connection.send("hello client it's the server")
    //accept will send back the switching protocol
    connection.on("open", e=> console.log("opened"))
    connection.on("close", e=> console.log("CLOSED"))
    connection.on("message", e=> console.log(`recieve ${e.utf8Data}`))
    sendProgessBar()
})

httpServer.listen(8090, () => console.log("server is listening"))


//looking at an example = how about we send progress of a hypothetical file download to the client every 5 second
function sendProgessBar(){
    connection.send(`downloading file from server - ${Math.random()}`)
    setTimeout(sendProgessBar,5000)
}