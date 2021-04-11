import React,{useEffect,useState} from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import styled from "styled-components";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar/sidebar";
import Chats from "./components/chats/chats";
import LoginPage from "./pages/login";
import db,{auth} from "./firebase";
import {useSelector,useDispatch} from "react-redux";
import {addChannel} from './ReduxToolkit/channelSlice.js'

function App() {

 const dispatch=useDispatch()
 const userName=useSelector(state=>state.userName)
  const [userEmail, setUserEmail] = useState('')
  //----------------
  const getChannels=()=>{
    db.collection('rooms').onSnapshot(snapshot=>{
      const infos=snapshot.docs.map(doc=>{
        return{
          id:doc.id,
          name:doc.data().name
        }
      })
    dispatch(addChannel(infos))

})
  }
  //----------------
  const getUser=()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
      setUserEmail(user.email)
    }
    else(
      setUserEmail("")
      )
    })
  }
  //------------------------
  useEffect(() => {
   getChannels()
   getUser()
  }, [])
  //------------------------
 return (
  <Router>  
  {userEmail ?
    <div className="App">
      <Container>
        <Navbar/>
          <Main>
           <Sidebar/> 
             <Switch>
              <Route path="/room/:channelId">
                <Chats/>
              </Route>
               <Route path="/">
                 <EmptyChat>
                 <p>Select or Create channel</p>
                 </EmptyChat>
              </Route>

             </Switch>

          </Main>
       </Container>
    </div> :

    <LoginPage/>}
    </Router>
  );
}

export default App;

const Container=styled.div`
background-color:white;
display:grid;
grid-template-rows: 50px minmax(0,1fr); 
`

const Main=styled.div`
background-color:royalblue;
display:grid;
grid-template-columns:230px auto;

`
const EmptyChat=styled.div`
background-color:coralblue;
height:100vh;
p{
  color:white;
  padding:5px;
  padding-left:10px;
  font-size:18px;
}


`
