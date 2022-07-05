// add this code to your browser json to simulate an eventsource

let eventsource = new EventSource("localhost:8090/streamlogs")
//create a hook to view message in browser
eventsource.onmessage = console.log