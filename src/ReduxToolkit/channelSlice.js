import {createSlice} from "@reduxjs/toolkit";

const initialState=["initialState"]

const ChannelSlice=createSlice({
	name:"channels",
	initialState,
	reducers:{
		addChannel:(state,action)=>{
			
			return [...action.payload]
		},
		deleteChannel:(state)=>{
			return state=[]
		}
	}
})
export const {addChannel,deleteChannel}=ChannelSlice.actions;
export default ChannelSlice.reducer