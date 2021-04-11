import React,{useState,useEffect}from 'react';
import styled from "styled-components";
import {auth} from '../firebase';
import slackFoto from './slackFoto.jpg'
import {useSelector,useDispatch} from 'react-redux';
//import {addUsername} from '../ReduxToolkit/userSlice'

const LoginPage = () => {
const [user, setUser] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [emailError, setEmailError] = useState('')
const [passwordError, setPasswordError] = useState('')
const [hasAccount, setHasAccount] = useState(true);
//const [inputValue, setInputValue] = useState(false);
//----------------
console.log(user.email)

//--------------------

const clearInputs=()=>{
	setEmail("")
	setPassword('')
}
//--------------------
const clearErrors=()=>{
	setEmailError("")
	setPasswordError('')
}
//---------------

const handleLogin=(user)=>{
clearErrors()
	auth
	.signInWithEmailAndPassword(email,password)
	.then((auth)=>{
		// logged iin redirect to hhomepage
	})
	.catch(error=>{
switch(error.code){
case "auth/invalid-email":
case "auth/user-disabled":
case "auth/user-not-found":
setEmailError(error.message);
break;
case "auth/wrong-password":
setPasswordError(error.message);
break;
	}})

	
}
//--------------------------------
const handleSignUp=()=>{
	clearErrors()
	auth
	.createUserWithEmailAndPassword(email,password)
	.then((auth)=>{
		//create a user and logged in

	})
	.catch(error=>{
switch(error.code){
case "auth/email-already-in-use":
case "auth/invalid-email":
setEmailError(error.message);
break;
case "auth/weak-password":
setPasswordError(error.message);
break;
	}})
	

}

//------------------------------------
const authListener=()=>{
	console.log("ishladi")
	auth
	.onAuthStateChanged((user)=>{
		if(user){
			localStorage.setItem("ishtirokchi",user.email)
		}
		else{
			setUser("")
		}
	})
	
}
//---------------------------------
useEffect(() => {
authListener()
}, [])


//------------------------------------
  return (
  
    <Container>
   
      <Content>
      <Image 
       src={slackFoto} alt="slack"/>
      <h1 >Sign in Slack</h1>
      <form onSubmit={e=>e.preventDefault()}>
            <Input>

      <input 
      required
      autofocus
      type ="email"
      value={email}
       onChange={e=>{
       	setEmail(e.target.value)
       }}
       />
   
      {email ? <Label>
      	<label>Usernamer: </label>
      	</Label>:
      <label>Usernamer: </label>}


  
<h6>{emailError}</h6>
</Input>

      <Input>
  <input 
  autofocus
  required
      type ="password"
      value={password}
       onChange={e=>{
       	setPassword(e.target.value)
       }}
       />
 
      <label>Password: </label>
 
       <h6>{passwordError}</h6>
       </Input>
{
	hasAccount ? (
		<div>
         <button onClick={()=>handleLogin()}>Sign in </button>
         <p>Dont have an account?<span onClick={()=>{
         	setHasAccount(!hasAccount)
         }}>Sign up</span></p>
		</div>
	):(
	<div>
         <button onClick={handleSignUp}>Sign up</button>
         <p>Have an account?
          <span onClick={()=>{
         	setHasAccount(!hasAccount)
         }}> Sign in</span></p>
        
	</div>
)

}
      </form>
     
       </Content>
    </Container>
  )
}

export default LoginPage;

const Container=styled.div`
background-color:#f2e6e6;
height:100vh;
width:100%;
display:flex;
justify-content:center;
align-items:center


`
const Content=styled.div`
padding:70px 100px;
background-color:white;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;

h1{
	font-weight:bold;
	font-family:"Mukta",sans-serif;
}
form{
	text-align:center;
	align-items:center;
	margin-top:20px;
	display:flex;
	flex-direction:column;
position:relative;

}
label{
	text-align:left;
	font-family:"Mukta",sans-serif;
	top:11px;
	left:0;
   padding-left:3px;
	position:absolute;
	transition:0.7s;
	pointer-events:none;

}
input{
	height:60px;
	padding-left:3px;
border:none;
background-color:transparent;
border-radius:4px;
width:300px;
height:35px;
border-bottom:1px solid gray;
outline:none;
margin-bottom:7px;

:focus   + label,
:valid  + label {
	top:-15px;
	font-size:15px;
	color:gray;
	padding-bottom:4px


}
}
h6{
		align-items:center;
		text-align:center;
		padding:0 20px;
		width:300px;

		font-family:"Mukta",sans-serif;
		padding-top:4px;
		color:red;
		font-weight:bolder;

}
p{
	text-align:right;
		font-family:"Mukta",sans-serif;
}
span{
	color:red;
font-family:"Mukta",sans-serif;
font-weight:bold;
cursor:pointer;
}
button{
	justify-content:center;
background-color:royalblue;
padding:10px 0;
width:300px;
margin-bottom:10px;
border:none;
border-radius:3px;
color:white;
:hover{
	background-color:coral
}
}

`
const Image=styled.img`
height:150px;
:hover{
	cursor:pointer
}
`
const Label=styled.div`
position:absolute;
	top:-26px;
	font-size:15px;
	color:gray;
	padding-bottom:4px
	`
const Input=styled.div`
position:relative

`

