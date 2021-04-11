import React,{createContext,useContext,useReducer} from 'react';
import './Appp.css'
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from './ChildComponents/Navbar'
import Home from './ChildComponents/Home'
import Login from './PagesAppContext/login';
import styled from 'styled-components';


export const NewContext=createContext()
const initialState={
	expences:[]
};
const reducer=(state,action)=>{
	switch(action.type){
		case "addOne":
		return state={...state,expences:[...state.expences,action.payload]};
		case "minusOne":
		return state={...state,expences:state.expences.pop()}
		default:
		return state;
	}
}

const Appp = (props) => {

const [state, dispatch] = useReducer(reducer, initialState)

  return (
	<NewContext.Provider value={{countState:state,countDispatch:dispatch}}>
	<Router>
	<Container>
<Switch>
<Route exact path="/" >

<Navbar/>
<Home/>
</Route>
<Route exact path="/login">
<Login/>
</Route>
</Switch>
</Container>
	</Router>
    
    </NewContext.Provider>
  )
}

export default Appp;

const Container=styled.div`
`