import React from 'react';
import "./project.css";
import EngineeringIcon from '@mui/icons-material/Engineering';
import Content from './Content';
import {NavLink} from "react-router-dom";
import { useEffect, useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import Cardskeleton from '../achivements/Cardskeleton';

const Project = () => {
  const [data, setData] = useState([]);
  const [isloading,setIsloading] = useState(true);
  useEffect(() => {
    setTimeout(()=>{
      fetchData();
    },1000);
    
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch('https://portfolio-backend-ashen.vercel.app/api/achive/getting');
      const jsonData = await response.json();
      setData(jsonData)
      setIsloading(false);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  // console.log(data)
  return (
    <div className='project'>
        <div className="project__nav">
            <NavLink to="/"><HomeIcon className='achive__Project' style={{fontsize:"28px"}}/></NavLink>
            <EngineeringIcon style={{fontSize:"28px"}}/>
           <h2>Projects</h2> 
        </div>
        <div className="project__content">
            {isloading && <Cardskeleton count={3}/>}
            {data.map((item, index) => (
                <Content  image={item.img} title={item.name} link={item.link} tech={item.techused}/>
            ))}
        </div>
    </div>
  )
}
export default Project