import React,{useState,useEffect} from 'react';
import styled from "styled-components";
import SendIcon from '@material-ui/icons/Send';
import {useSelector,useDispatch} from 'react-redux';
import {addMessage} from '../../ReduxToolkit/textMessages'
import AvatarPhoto from "./otabek.jpg";
import {useParams} from 'react-router-dom';
import db from "../../firebase";
import firebase from 'firebase';
import {auth} from '../../firebase';
import Avatar from '@material-ui/core/Avatar';

const ChatInputComponent = (props) => {

	//<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
const [text, setText] = useState('')
const [user, setUser] = useState('')
const {channelId}=useParams()
//-------------
const getEmail=()=>{
  auth.onAuthStateChanged((user)=>{
setUser(user.email)
  })
}
 useEffect(() => {
 	getEmail()
 }, [user])
//----------------
const getMessages=()=>{
	console.log("hahhah")

	const payload={
		user:user,
		text:text,
		userImage:AvatarPhoto,
		timeStamp:firebase.firestore.Timestamp.now().toDate().toGMTString()

	}
	console.log(payload)
	db.collection("rooms")
	.doc(channelId)
	.collection("messages")
	.add(payload)
}

//---------------
const onChangeHandler=e=>{
setText(e.target.value)	
}
	//---------------------
const sendMessage=(e)=>{
	e.preventDefault()
	getMessages()
	setText('')
}
	//---------------
  return (
    <Container>

    <InputContainer>
    <form >
    <input type="text" 
    value={text}
    onChange={onChangeHandler}
    placeholder="Message here..."/>
<SendButton 
type="submit"
onClick={sendMessage}
>
<SendIcon />
</SendButton>
    </form>
    </InputContainer>

    </Container>
  )
}

export default ChatInputComponent;

const Container=styled.div`
background-color:orange;
width:98%;
border:none;
margin:0 auto;
margin-bottom:40px;
`
const InputContainer=styled.div`
width:90%;
margin:auto;
padding:11px 0;
background-color:transparent;
form {
display:flex;
justify-content:space-between;
align-items:center;
padding:12px 10px;
outline:0.3px solid gray;
border-radius:7px;
height:40px;

}
input{
	border-radius:4px;
	border:none;
	flex:1;
	height:30px;
	padding-left:5px;
	background-color:transparent;
	:hover{
		background-color:transparent
	}
	:focus{
		background-color:transparent;
		outline:none
	}

}
`
const Icon=styled.div`
height:30px;
cursor:pointer;
background:gray;
 border-top-left-radius:2px; 
 border-bottom-left-radius:2px; 
height:40px;
width:40px;
display:flex;
justify-content:center;
align-items:center;
margin-right:-10px;

`
const SendButton=styled.button`
height:30px;
cursor:pointer;
background:gray;
 border-top-left-radius:2px; 
 border-bottom-left-radius:2px; 
height:40px;
width:40px;
display:flex;
justify-content:center;
align-items:center;
margin-right:-10px;


`