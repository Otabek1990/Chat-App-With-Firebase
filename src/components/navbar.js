import React, {useState,useEffect} from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import styled from "styled-components";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {auth} from '../firebase';
//import {useSelector} from "react-redux";
//import {useHistory} from 'react-router-dom';

const Navbar = () => {
  //const userName=useSelector(state=>state.userName)
//const dispatch=useDispatch()
//const history=useHistory()
const [state, setState] = useState('')

const handleSignOut=()=>{
  auth.signOut().then((u)=>{
    localStorage.removeItem("ishtirokchi")
  })
    
}
const getEmail=()=>{
  auth.onAuthStateChanged((user)=>{
setState(user.email)
  })
}
useEffect(() => {
 getEmail()
}, [state])

  return (
    <NavbarPage>
  
    <SearchInput>
    <AccessIcon>
<AccessTimeIcon/>
</AccessIcon>
    <input 
    type="text"
    placeholder="search "
    />
    <HelpIcon>
    <HelpOutlineIcon/>
    </HelpIcon>
    </SearchInput>
     <UserContainer>
     <Name>
</Name>
<ImageFoto>
<AccountBoxIcon/>
</ImageFoto>
{state}
  <Logout>
      <button onClick={handleSignOut}>Log out</button>
      </Logout>
</UserContainer>
   </NavbarPage>
 
  )
}

export default Navbar;



const NavbarPage=styled.div`
display:flex;
background-color:gray;
position:relative

`


const SearchInput=styled.div`
width:65%;
display:flex;
align-items:center;
background-color:gray;
margin-left:50px;

input{

	outline: transparent;
border:0.5px solid lightgray;
border-radius:3px;
	background-color:transparent;
	margin:0 3px;
	width:100%;
	min-width:350px;
	max-width:650px;
	height:30px;
	padding:0 5px;
color:white;

::placeholder{
	color:white;
}
:focus{
	outline:none
}
:hover{
	color:white;
  cursor:default

}

}
`
const AccessIcon=styled.div`
padding:0 3px;
color:white;
cursor:pointer
`
const HelpIcon=styled.div`
padding:0 3px;
color:white;cursor:pointer


`
const UserContainer=styled.div`
align-items:center;
display:flex;
text-align:right;
float:right;
height:45px;
color:white;
background-color:gray;
margin-right:6px;
position:absolute;
right:0

`
const Name=styled.div`
padding:0 3px;
`
const ImageFoto=styled.div``

const Logout=styled.div`
button{
margin-left:10px;
background-color:coral;
border-radius:3px;
border:none;
color:white;
font-size:15 px;
font-family:"Mukta",sans-serif;
  transition:0.4s ease;

:hover{
  background-color:royalblue
}

}`