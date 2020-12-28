import express  from  'express';
const server = require('http').Server(express());
const io = require('socket.io')(server);


export default function getSocket(){
       
    return io.on('connection', (socket:any) => {
        socket.on("disconnect", () => console.log(`${socket.id} User disconnected.`));
    })
}


server.listen(3001);
