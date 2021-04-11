import React from 'react';
import styled from "styled-components";
import {ItemDatas} from "./sidebarItemsData";

const SidebarItems = (props) => {
  return (
    <Container>
{ItemDatas.map((item)=>(
	<Item key={item.key} >
<Icons key={item.text} >{item.icon}</Icons>
<Text key={item.icon}>{item.text}</Text>

	</Item>
	))}
    </Container>
  )
}

export default SidebarItems;

const Container=styled.div`
display:flex;
flex-direction:column;
text-align:center;
justify-content:center

`
const Icons=styled.div`
margin:0 7px;
color:#ffff;
cursor:pointer

`
const Item=styled.div`
padding:3px;
padding-left:0px;
display:flex;
flex-direction:row;
align-items:center;
cursor:pointer;
:hover{
	background-color:gray
}


`
const Text=styled.div`
color:orange;
cursor:pointer

`