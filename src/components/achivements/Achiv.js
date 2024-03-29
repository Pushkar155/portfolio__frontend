import React from 'react';
import "./achiv.css";
// import EngineeringIcon from '@mui/icons-material/Engineering';
import Acontent from './Acontent';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
// import HomeIcon from '@mui/icons-material/Home';
import HomeIcon from '@mui/icons-material/Home';
import { useEffect, useState } from 'react';
import {NavLink} from "react-router-dom";
import Cardskeleton from './Cardskeleton';

const Achiv = () => {
  const [data, setData] = useState([]);
  const [isloading,setIsloading]=useState(true);
  useEffect(() => {
    setTimeout(()=>{
      fetchData();
    },1000);
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch('https://portfolio-backend-ashen.vercel.app/api/project/getting');
      const jsonData = await response.json();
      setData(jsonData);
      setIsloading(false);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  // console.log(data)
  return (
    <div className='achiv'>
        <div className="achiv__nav">
            <NavLink to="/"><HomeIcon className='achive__home' style={{fontsize:"28px"}}/></NavLink>
            <EmojiEventsIcon style={{fontSize:"28px"}}/>
           <h2>Achivements</h2> 
        </div>
        <div className="achiv__content">
            {isloading && <Cardskeleton count={3}/>}
            {/* <Cardskeleton count={3}/> */}
            {data.map((item, index) => (
                <Acontent  image={item.img} title={item.somedecs} link={item.link} tech={item.ranking}/>
            ))}
        </div>
    </div>
  )
}

export default Achiv