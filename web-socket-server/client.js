// fastest way to demo this is by adding the following code to your browser
let ws = new WebSocket("ws://localhost:8090")
//to see message from server on browser, try connection.send while running a debug
ws.onmessage = message => console.log(`we recieve message from server ${message.data}`)
ws.send("hello server its the client")
