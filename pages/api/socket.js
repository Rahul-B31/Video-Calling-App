import { Server } from "socket.io";

const socketHandler = (res,req)=>{

    if(res.socket.server.io){
        console.log("socket is already is running...")
    }
    else{ 
        const io = new Server(res.socket.server)
        res.socket.server.io = io;
        io.on('connection',(socket)=>{
             console.log("server is connected")
        })
    }
    res.end();
}
export default socketHandler;