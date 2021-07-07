import React, { Component } from 'react'  
import Chatbot from "react-chatbot-kit";
import ActionProvider from './chatbot/ActionProvider';
import config from './chatbot/config';
import MessageParser from './chatbot/MessageParser';




export class Chatbox extends Component {  
    render() {  
          return(  
              <div className="App"> 
                <div style={{ marginLeft:"40%", marginTop:"7%", maxWidth: "300px"}}>
                  <Chatbot
                  config={config} 
                  actionProvider = {ActionProvider}
                  messageParser = {MessageParser}
                  style = {{width: "00px"}}
                  />
                </div>
              </div>
            )
       
    }  
}  
  
export default Chatbox