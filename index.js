var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var clients = {};

app.get('/', function(req, res){
res.send('server is running');
});

io.on("connection", function (client) {
    console.log('user connected');
    let latitude= 37.78825;
    let longitude= -122.4324;
    setInterval(()=>{
        latitude = latitude + 0.001
        longitude = longitude + 0.001
        client.emit("updateData", {latitude, longitude});

    }, 1000)
    
});

http.listen(3001, function(){
console.log('listening on port 3000');
});