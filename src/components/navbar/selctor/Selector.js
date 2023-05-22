import React from 'react'
import "./selector.css"


function Selector({name,compo}) {
  return (
    <div className='selector'>
        <div className="selector__compo">{compo}</div>
        <div className="selector__name"><h3>{name}</h3></div>
    </div>
  )
}

export default Selector