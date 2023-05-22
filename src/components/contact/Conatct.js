import React, { useState } from "react";
import "./contact.css";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import {NavLink} from "react-router-dom";
// import { useEffect, useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';

const Conatact = () => {
  const [singup, setSignup] = useState({});
  const handelchange = (e) => {
    setSignup({ ...singup, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('https://locohost/3001', {
      method: 'GET',
      body: JSON.stringify(singup),
      headers: {
        'Content-Type': 'application/json',
      },
    
    })
    // console.log(singup);
  };

  return ((
    <div className="contact">
      <contact className="conatct__up">
      <NavLink to="/"><HomeIcon className='achive__Home' style={{fontsize:"28px"}}/></NavLink>
        <ContactMailIcon />
        <h2>Contact Me</h2>
      </contact>
      <div className="contact__down">
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__email">
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handelchange}
              />
          </div>
          <div className="contact__email">
              <textarea
              placeholder="Still Working On This "
              name="message"
              onChange={handelchange}
              />
          </div>
          <div className="contact__button">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  ));
}
export default Conatact;
