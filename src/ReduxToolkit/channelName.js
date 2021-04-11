import {createSlice} from '@reduxjs/toolkit';

const initialState=[];

const channelName=createSlice({
	name:"channelName",
	initialState,
	reducers:{
      addName:(state,action)=>{
      	state.push(action.payload)
      }


	}
})
export const {addName}=channelName.actions
export default channelName.reducer