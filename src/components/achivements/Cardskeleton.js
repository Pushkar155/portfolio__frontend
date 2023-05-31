// import { Skeleton } from '@mui/material'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import "./acontent.css";
import React from 'react';

const Cardskeleton = ({count}) => {
  return (
    Array(count).fill(0).map((_,id)=>
        <div className='skeleton' key={id}>
        <div className="image">
            <Skeleton height={240} width={620} style={{borderRadius:"10px"}}  />
        </div>
        <div className="name">
            <div className="tech">
                <Skeleton height={40} width={400} style={{marginBottom:"10px"}} />
                <Skeleton height={20} width={300}/>
            </div>
            <div className="but">
                <Skeleton height={30} width={90} />
            </div>
        </div>
    </div>)
  )

}

export default Cardskeleton