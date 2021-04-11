import React,{useContext,useState} from 'react';
import {NewContext} from '../Appp';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Menu from '@material-ui/icons/Menu'

const Navbar = (props) => {
const {countState,countDispatch} = useContext(NewContext)
 //const [services, setServices] = useState(false)
const [places, setPlaces] = useState(false)
const [experience, setExperience] = useState(false)
const [onlineExperience, setOnlineExperience] = useState(false)
 
 const placesBtn=()=>{
 	setExperience(false)
 	setOnlineExperience(false)
setPlaces(!places)

 }
const experienceBtn=()=>{
	setPlaces(false)
	setOnlineExperience(false)
setExperience(!experience)
 }
const onlineExperienceBtn=()=>{
	setPlaces(false)
	setExperience(false)
setOnlineExperience(!onlineExperience)
 }
  return (
  	<div>
    <NavbarContainer>
      <MenuIcon>
        <Menu style={{fontWeight:"bold"}}/>
        <h4>airbnb</h4>    
      </MenuIcon>
               <Services>
                 <p onClick={placesBtn}> Places to stay</p>
                 <p onClick={experienceBtn}>Experience</p>
                 <p onClick={onlineExperienceBtn}> Online Experience</p>
               </Services>
             <RightItems>
                <p>Become a host </p>
              <p>Sign up</p>
              <RightMenu>
                  <Menu/>
              </RightMenu>
             </RightItems>

    </NavbarContainer>

      {places &&
                <Infos>
    			  <Contacts>
    			  <p>tel:Contacts:</p>
    			  <p>tel:975875355</p>
    			  <p>tel:975875355</p>
    			  </Contacts>
    			  <Hotels>
    			  <p>Hotels:</p>
    			  <p>sheraton</p>
    			  <p>sheraton</p>
    			  </Hotels>
    			  <Location>
    			  <p>Location:</p>
    			  <p>Uzbekistan</p>
    			  <p>Uzbekistan</p>
    			  </Location>
               </Infos>}	
       {experience &&
	         <Infos>
    			<h2>There will be Experience infos</h2>
    		</Infos>}
      {onlineExperience && 
      	<Infos>
    			<h2>There will be onlineExperience infos</h2>
    			</Infos>}
    		
    </div>
  )
}

export default Navbar;

const NavbarContainer=styled.div`
height:60px;
width:100%;
background-color:transparent;
display:flex;
text-align:center;
align-items:center;
justify-content: space-between;
color:white;
font-size:14px;
font-family:sans-serif;
font-weight:bolder;



`
const MenuIcon=styled.div`
display:flex;
align-items:center;
margin-left:40px;
cursor:pointer;
padding:5px;


:hover{
	outline:1px solid;

}
h4{
	padding:0 4px;
  :hover{
      color:orange;

  }
}

`
const Services=styled.div`

	display:flex;
	list-style-type: none;
	margin-left:20px;
	p{
	padding:5px;
	cursor:pointer;
	:hover{
		color:orange
}

	}

`
const RightItems=styled.div`
justify-content:center;
align-items:center;
p{
	padding-right:20px;
  :hover{
    cursor:pointer;
      color:orange;
  }
}
display:flex;
`
const RightMenu=styled.div`
margin-right:10px;
color:gray;
border:none;
padding:0 10px;
background-color:#ffff;
	border-radius:99px;
		border-right-style: all;
    :hover{
      cursor:pointer;
    }
	`

	const Infos=styled.div`
padding:5px 0;
	text-align:center;
	background-color:white;
	align-items:center;
	display:flex;
	justify-content:space-around;
	margin:0 auto;
	width:500px;
	height:60px;
	border-radius:30px;
	h2{
		padding-top:10px;
		text-align:center;
		margin:auto
	}

	`
	
	const Contacts=styled.div`
	cursor:pointer;
	:hover{
		color:coral
	}
	`
	const Hotels=styled.div``
	const Location=styled.div``