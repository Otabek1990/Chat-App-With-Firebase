import React from 'react';
import SidebarHeader from "./sidebarHeader"
import SidebarItems from "./sidebarItems"
import SidebarChannels from "./sidebarChannels"
import styled from "styled-components";

const Sidebar = ({rooms,setRooms}) => {
  return (
    <Container>
    <SidebarHeader/>
    <Items>
    <SidebarItems/>
    <SidebarChannels
    setRooms={setRooms}
     rooms={rooms}/>
    
    </Items>

    </Container>
  )
}

export default Sidebar;

const Container=styled.div`
 display:grid;
 grid-template-rows:70px auto;
 background-color:purple;

`
const Items=styled.div`
height:60vh;
`
