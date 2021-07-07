class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      const lowercase = message.toLowerCase();
    
        if(true){
            this.actionProvider.responseBack(lowercase);
        }
    }
  }
  
  export default MessageParser;