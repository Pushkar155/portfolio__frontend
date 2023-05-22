import React from 'react'
import "./about.css"

const Aboutme = () => {
  return (
    <div className='about'>
        <div className="about__left">
            <h3>About Me</h3>
            {/* <br /> */}
            <p>Welcome to my website! I'm thrilled to have the opportunity to introduce myself to you.

I'm Pushkar Chaubey, a passionate and skilled frontend developer with expertise in a range of technologies and languages. With a strong foundation in React.js, CSS, and HTML, I create dynamic and visually appealing web applications that provide exceptional user experiences.</p>

        </div>
        <div className="about__right">
            <h2>Hi I'm Pushkar Chaubey</h2>
            <h3> 🏠   Location</h3>
            <h4>INDIA </h4>
            <p>Abes Engineering Collage ,Ghaziabad</p>

        </div>
    </div>
  )
}

export default Aboutme