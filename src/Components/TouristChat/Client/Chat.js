import React from 'react'
import ScrollToBottom from "react-scroll-to-bottom";
import { useState,useEffect } from 'react';
import  './../../../css/touristchat.css'

function Chat({socket, username ,room}) {
    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);
    
    const sendMessage = async () => {
      if (currentMessage !== "") {
        const messageData = {
          room: room,
          author: username,
          message: currentMessage,
          time:
            new Date(Date.now()).getHours() +
            ":" +
            new Date(Date.now()).getMinutes(),
            
            
        };
  
        await socket.emit("send_message", messageData);
        setMessageList((list) => [...list, messageData]);
        setCurrentMessage("");
      }
    };
  
    useEffect(() => {
      socket.on("receive_message", (data) => {
        console.log(data)
        setMessageList((list) => [...list, data]);
      });
    }, [socket]);
  
    return (
      <div className="chat_window">
        <div className="chat_header">
          <p>Tourist Chat</p>
        </div>
        <div className="chat_body">
          <ScrollToBottom className="chat_container">
            {messageList.map((messageContent) => {
              return (
                <div
                  className="message"
                  id={username === messageContent.author ? "you" : "other"}
                key={messageContent.id}>
                  <div>
                    <div className="message_content">
                      <p>{messageContent.message}</p>
                    </div>
                    <div className="message_meta">
                      <p id="time">{messageContent.time}</p>
                      <p id="author">{messageContent.author}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </ScrollToBottom>
        </div>
        <div className="chat_footer">
          <input
            type="text"
            value={currentMessage}
            placeholder="Hey..."
            onChange={(event) => {
              setCurrentMessage(event.target.value);
            }}
            onKeyPress={(event) => {
              event.key === "Enter" && sendMessage();
            }}
          />
          <button onClick={sendMessage}>&#9658;</button>
        </div>
      </div>);
}

export default Chat
