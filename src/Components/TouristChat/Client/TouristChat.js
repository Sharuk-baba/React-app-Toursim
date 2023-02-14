import React from 'react'
import io from 'socket.io-client'
import { useState } from 'react';
import Chat from './Chat';
import './../../../css/touristchat.css'

const socket = io.connect("http://localhost:3001");

function TouristChat() {

    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);
  
    const joinRoom = () => {
      if (username !== "" && room !== "") {
        socket.emit("join_room", room);
        setShowChat(true);
      }
    };
  return (
    <div className="App">
       {!showChat ? (
        <div className="joinChatContainer">
          <h3 style={{color:"green"}}>Join A Chat</h3>
          <input
            type="text"
            placeholder="Your name here ..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join A Room</button>
        </div>
      
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  )
}

export default TouristChat
