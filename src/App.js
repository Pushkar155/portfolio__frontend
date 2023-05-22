import './App.css';
import React from 'react'
import Navbar from './components/navbar/Navbar';
import Home from "./components/home/Home";
import Aboutme from './components/About/Aboutme';
import Project from './components/project/Project';
import Achiv from './components/achivements/Achiv';
import Conatact from './components/contact/Conatct';
import {Route,Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* done */}
      <Routes>
        <Route exact path='/' element={<><Navbar/><Home/><Aboutme/></>}></Route>
        <Route exact path='/project' element={<Project/>}></Route>
        <Route exact path='/achivement' element={<Achiv/>}></Route>
        <Route exact path='/contact' element={<Conatact/>}></Route>
        {/* <Route exact path='/'></Route> */}
      </Routes>
      
      {/* <Project/> */}
    </div>
  );
}

export default App;
