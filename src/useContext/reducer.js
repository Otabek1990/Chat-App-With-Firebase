export const initialState=0;

const Reducer=(state,action)=>{
	switch(action.type){
		case "addOne":
		return state=state+1;
		case "minusOne":
		return state=state-1;
		default:
		return state;
	}

}
export default Reducer;