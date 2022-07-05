
const app = require("express")()

app.get("/", (req, res)=> res.send("hello"))


app.get("/streamlogs", (req, res)=>{
    // set header to establish protocol
    res.setHeader("Content-Type", "text/event-stream")
    send(res, 1)
    //The writable.write() method writes some data to the stream, and calls the supplied callback once the data has been fully handled. 
    //we need to write to the same tcp connection
    
})
app.listen(8090)

function send(res, seconds){
    res.write("data: "+`${seconds} seconds -`+"everthing is fine for now, no errors detected!\n\n")
    setTimeout(()=> send(res, seconds+1), 1000)
}
console.log("our server for sse has started")