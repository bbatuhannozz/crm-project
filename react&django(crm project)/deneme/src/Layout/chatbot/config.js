import { createChatBotMessage } from "react-chatbot-kit";
import ActionProvider from "./ActionProvider";
import Deneme from "./Deneme";
import Logo from "./deneme.png";


const config = {
    botName: "AyBankBot",
    initialMessages: [createChatBotMessage(`Hello world`)],

    customStyles: {
        // Overrides the chatbot message styles
        botMessageBox: {
            paddingLeft: "70px",
            backgroundColor: "#ED1B2E",
        },
        // Overrides the chat button styles
        chatButton: {
          backgroundColor: "#ED1B2E",
        },
    },
    customComponents: {
        // Replaces the default header
       header: () => <div style={{ backgroundColor: '#ED1B2E', padding: "11px", borderRadius: "5px", color:"white" }}>AyBank Chatbot</div>,
       botAvatar: (props) => <img style={{height: "45px" , width: "45px"}} src={Logo}></img>,
       /* botChatMessage: (props) => <ActionProvider /> */
        /* <div class="react-chatbot-kit-chat-bot-message" style={{marginLeft:"7%", backgroundColor:"red"}}><span></span><div class="react-chatbot-kit-chat-bot-message-arrow" style={{marginTop:"3%", borderRightColor:"red"}}></div></div> */
    }
}

export default config