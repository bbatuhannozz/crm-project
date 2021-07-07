import React, { Component } from 'react';

var textMessage;

export class ActionProvider extends Component{

    constructor(createChatBotMessage, setStateFunc, createClientMessage) {

      super()

      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }
  
    responseBack = (comingMessage) => {
        textMessage = comingMessage;
        const message = this.createChatBotMessage(comingMessage)
        this.addMessageToState(message);
    }

    addMessageToState = (message) => {
        this.setState((prevState) => ({
            ...prevState,
            messages:[...prevState.messages, message],
        }));
    };

    

    render(){
        return (
            <div class="react-chatbot-kit-chat-bot-message" style={{marginLeft:"7%", backgroundColor:"red"}}><span>{textMessage}</span><div class="react-chatbot-kit-chat-bot-message-arrow" style={{marginTop:"3%", borderRightColor:"red"}}></div></div>    
        )
    }

    

}
  
export default ActionProvider;