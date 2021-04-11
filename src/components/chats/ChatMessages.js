import React,{useState,useEffect} from 'react';
import styled from "styled-components";
import AvatarPhoto from "./otabek.jpg";
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import db from "../../firebase";
import Avatar from '@material-ui/core/Avatar';

const ChatMessages = (props) => {
	//<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />

const [messages, setMessages] = useState([])
const {channelId}=useParams()

const getMessages = () =>{
    db.collection("rooms")
    .doc(channelId)
    .collection("messages")
    .orderBy('timeStamp', 'asc')
    .onSnapshot((snapshot)=>{
        let texts=snapshot.docs.map((doc)=>doc.data())
        console.log(texts)
        setMessages(texts)
    }) 
}

useEffect(() => {
	getMessages()

}, [channelId])



  return (
    <Container>
          {messages.length>0 && 
            messages.map(item =>(
         <MessageContent>
         	<Avatar className="avatar" alt="Remy Sharp" src=""/>

         <div>
             <Name>
            	<p >{item.user}</p>
                <Time>
                   <p>{item.timeStamp}</p>
                </Time>
             </Name>
             <Content>
                <p>{item.text}</p>
             </Content>
             </div>
        </MessageContent> 
            ))  
           }
    </Container>
  )
}

export default ChatMessages;

const Container=styled.div`
background-color:#d9c7c7;
height:100vh;
overflow-y:scroll;
`
const UserImage=styled.img`
height:60px;
	margin-top:3px;
	padding:9px;
	cursor:pointer;
	border-radius:6px

`

const MessageContent=styled.div`
padding:1px;
display:flex;
img{
	height:60px;
	margin-top:3px;
	padding:9px;
	cursor:pointer;
	border-radius:6px

}
.avatar{
	margin-top:10px;
	margin-right:8px;
	margin-left:5px;
	height:50px;
	width:50px;

	:hover{
		cursor:pointer
	}
}
`
const Name=styled.div`
margin-top:7px;
display:flex;
justify-content:center;
align-items:center;
font-size:16px;
font-weight:bolder;

@media only screen and (max-width:710px){
	margin-top:-5px;
}

`
const Time=styled.div`
margin-left:8px;
p{
	font-size:14px;
	color:rgba(0,0,0,0.4);

}
@media only screen and (max-width:710px){
	margin-top:5px;
}


`
const Content=styled.div`
margin-top:-12px;
font-size:14px;
@media only screen and (max-width:720px){
	margin-top:-26px;
}

`

