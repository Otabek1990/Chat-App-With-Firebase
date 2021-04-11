import {createSlice} from '@reduxjs/toolkit';

const initialState=[]

const TextMessages=createSlice({
	name:"textMessages",
	initialState,
	reducers:{
      addMessage:(state,action)=>{
      	return [...state,action.payload]  
}
	}
})
export const {addMessage}=TextMessages.actions
export default TextMessages.reducer