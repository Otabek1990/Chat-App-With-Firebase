import React from 'react';
import styled from "styled-components";
import ChatsHeader from './chatsHeader';
import ChatInputComponent from './chatInputComponent';
import ChatMessagesComponent from './ChatMessages';


const Chats = (props) => {

//----------------------------
  return (
    <ChatContainer>
       <ChatsHeader/>
<ChatMessagesComponent/>
<ChatInputComponent/>
    </ChatContainer>
  )
}

export default Chats;

const ChatContainer=styled.div`
display:grid;
 grid-template-rows:70px auto min-content;
 min-height:0;
 background-color:#d9c7c7;
 
`
