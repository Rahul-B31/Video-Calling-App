import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client"; 

const SocketContext = createContext(null);

export const useSocket = ()=>{
    const socket = useContext(SocketContext);
    return socket;

}


export const SocketProvider = (props)=>{
   const [socket,setSocket] = useState(null)
   const {children} = props;

   useEffect(()=>{
    const connection = io();
    setSocket(connection)
   },[])
 socket?.on('connect_error',async (err)=>{
       console.log("error while eastablising the connection",err)
       await fetch('/api/socket')
 })

   return (
        <SocketContext.Provider value={socket}>
           {children}
        </SocketContext.Provider>
     )
}