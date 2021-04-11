import React from 'react';
import styled from "styled-components";
import AddIcon from '@material-ui/icons/Add';
import NewChannel from './newChannels';
import {useSelector} from "react-redux"
import {addChannel} from "../../ReduxToolkit/channelSlice"
import db from "../../firebase";

//------------------//----------
const SidebarChannels = ({rooms,setRooms}) => {

//const channelArray=useSelector(state=>state.channel)
//const dispatch=useDispatch()
 const channelInfos=useSelector(state=>state.channels)

//const [channelView, setChannelView] = useState(false)
const addChannel=()=>{
    const promptName =prompt("add new channel");
  if(promptName){
    const statement=channelInfos?.some(item=>
     item.name===promptName
      )
    if(statement){
      alert("Sorry such name is already existed.Choose another name please!")
    }
    else{
   db.collection('rooms').add({
        name:promptName
    })
 }
 }
}




/*const seeChannels=()=>{
setChannelView(!channelView)
}*/
//---------------------------
//----c-------

  return (
    <Channels>
      <ChannelAdd >
         Channels
         <Icon onClick={addChannel}><AddIcon/></Icon>
      </ChannelAdd>
       <NewChannel />
   </Channels>


  )
}

export default SidebarChannels;

const Channels=styled.div`

`

const ChannelAdd=styled.div`
color:white;
margin:10px 6px;
align-items:center;
display:flex;
justify-content:space-between;
font-size:18px;
padding-left:10px;
cursor:pointer;

:hover{
    background-color:orange;

}

`
const Icon=styled.div`
cursor:pointer;
color:black;
align-items:center;
:hover{
	color:white
}

`

