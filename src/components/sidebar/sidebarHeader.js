import React from 'react';
import styled from "styled-components";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const SidebarHeader = (props) => {
  return (
    <Users>
    <UserName>
    Fozilov Otabek
    </UserName>
    <AddIcon>
    <AddCircleOutlineIcon/>

    </AddIcon>


    </Users>
  )
}

export default SidebarHeader;
const Users=styled.div`
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