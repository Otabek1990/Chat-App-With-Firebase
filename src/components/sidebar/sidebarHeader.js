import React,{useState,useEffect} from 'react';
import styled from "styled-components";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {auth} from '../../firebase';

const SidebarHeader = (props) => {
  const [user, setUser] = useState('')
    const getEmail=()=>{
  auth.onAuthStateChanged((user)=>{
setUser(user.email)
  })
}

const name=user && user.slice(0,user.length-8)
useEffect(() => {
   getEmail()
}, [])
  return (
    <Users>
    <UserName>
    {name}
    </UserName>
    <AddIcon>
    <AddCircleOutlineIcon/>

    </AddIcon>


    </Users>
  )
}

export default SidebarHeader;
const Users=styled.div`
padding:10px 5px;
border-bottom:0.5px solid gray;
display:flex;
justify-content:space-between;
align-items:center;
height:100%;
`
const UserName=styled.div`
padding:0 3px;
font-size:18px;
color:#ffff;
cursor:pointer
`
const AddIcon=styled.div`
padding:0 4px;
margin-right:5px;
padding-bottom:4px;
color:black;
padding-top:3px;
border:1px solid white;
border-radius:50%;
background-color:white;
cursor:pointer;
:hover{
	background-color:gray;
	color:white
}

`