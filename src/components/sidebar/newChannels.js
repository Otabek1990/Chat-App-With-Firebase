import React,{useEffect} from 'react';
import styled from "styled-components";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import {useHistory} from 'react-router-dom';
import {useSelector} from "react-redux";
import db from "../../firebase";

//import {addChannel,deleteChannel} from '../../ReduxToolkit/channelSlice.js'

const ChannelsList = () => {
 //const [channels, setChannels] = useState([])
 //const [inputText, setInputText] = useState('')
 const history=useHistory();
 const channelInfos=useSelector(state=>state.channels)
//const dispatch=useDispatch()
//-----------------------------
console.log(channelInfos)
//---------------------
const deleteChannelBtn=(e,id)=>{
	e.preventDefault()
/*const filteredChannel=channelInfos.filter(item=>(
	item.id!==id 
	))*/
//dispatch(addChannel(filteredChannel))
}
/*const take_channels=()=>{
	db.collection("rooms").onSnapshot(snapshot=>{
		
	})
}*/
const goToChannel=(id)=>{
    if(id){
history.push(`/room/${id}`)
    }
}
useEffect(() => {
	//take_channels()
}, [])
//-------------------------------

  return (
    <NewChannels>
    {channelInfos.map(item=>(
    	<List>  	
<UserChannel onClick={()=>goToChannel(item.id)}>
<p key={item.id}>#{item.name}</p>
<DeleteIcon>
	<DeleteOutlineIcon onClick={(e)=>deleteChannelBtn(e,item.id)}/>
</DeleteIcon>
</UserChannel>
</List>
    	))}
 
    </NewChannels>
  )
}

export default ChannelsList;

const NewChannels=styled.div``
const List=styled.div`
width:100%;
height:30px;
margin-top:2px;
:hover{
	background-color:orange;
	cursor:pointer;
}
p{
	padding-left:5px;
color:white
}

`
const UserChannel=styled.div`
margin-top:10px;
display:flex;
justify-content:space-between;
padding:0 4px ;
text-align:center
`
const DeleteIcon=styled.div`
color:white;
margin-right:3px;
:hover{
	color:black;
	font-weight:bolder
}

`
