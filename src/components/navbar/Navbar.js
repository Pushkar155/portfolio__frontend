import React from 'react'
import "./navbar.css";
import Selector from './selctor/Selector';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import {NavLink} from "react-router-dom";

function Navbar() {
  return (
    <div className='navbar'>
        <div className="navabr__left">
            <h2>Pushkar. UI </h2>
        </div>
        <div className="navbar__right">
            <NavLink className="Nav__style" to="/project"><Selector name="Project" compo={<EngineeringIcon/>}/></NavLink>
            <NavLink className="Nav__style" to="/achivement"><Selector name= "Achivements" compo = {<EmojiEventsIcon/>}/> </NavLink> 
            <NavLink className="Nav__style" to="/contact"><Selector name= "Contact Me" compo={<ContactMailIcon/>}/> </NavLink> 
        </div>
    </div>
  )
}

export default Navbar