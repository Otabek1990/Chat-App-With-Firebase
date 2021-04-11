import React,{useState,useEffect} from 'react';
import styled from "styled-components";
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import {useParams} from 'react-router-dom';
//import {useSelector,useDispatch} from "react-redux";
import db from "../../firebase";
//import {addName} from "../../ReduxToolkit/channelName";


const ChatsHeader = (props) => {
    const [channelName, setChannelName] = useState()
    const [messages, setMessages] = useState([])
 //const channelInfos=useSelector(state=>state.channels)
 //const channelName=useSelector(state=>state.channelName)
//const dispatch=useDispatch();

const {channelId} = useParams()


const getChannel = () =>{
    db.collection("rooms")
    .doc(channelId)
    .onSnapshot((snapshot)=>{
        setChannelName(snapshot.data())
        console.log(snapshot.data())
        //dispatch(addName(snapshot.data().name))
    })
}

useEffect(() => {
    getChannel();

}, [channelId])

  return (
    <Header>
            <Channel>
          <ChannelName>
          <p>#{channelName !==undefined ? channelName.name: "kanal"}</p> 
       </ChannelName>
         <ChannelInfo> 
         Company-wide announcements
         </ChannelInfo>
    </Channel>
    <ChannelDetails>
     <DetailInfo>
         Details inf
     </DetailInfo>
        <DetailIcon>
            <InfoOutlinedIcon/>
        </DetailIcon>
    </ChannelDetails>
    </Header>
  )
}

export default ChatsHeader;

const Header=styled.div`
width:100%;
height:100%;
background-color:greenyellow;
display:flex;
justify-content:space-between;
align-items:center;
border-bottom:rgba(83,39,83,13)
`
const Channel=styled.div`
display:flex;
flex-direction:column;
font-size:12px;
padding-left:6px

`
const ChannelName=styled.div`
font-size:16px;
font-family:serif;
font-weight:bolder;
color:black;

`

const ChannelInfo=styled.div`
color:#606060;
font-size:13px
`
const ChannelDetails=styled.div`
display:flex;
align-items:center;
cursor:pointer

`
const DetailInfo=styled.div`
padding-bottom:3px;
font-size:15px;
color:#403737;

`
const DetailIcon=styled.div`
color:gray;
padding: 0 10px;
`
