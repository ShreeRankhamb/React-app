import React from 'react'
import './Program.css'
import html from '../../assets/html.png'
import css from '../../assets/css1.png'
import js from '../../assets/js.png'


const Program = () => {
  return (
    <div className='Programs'>
        <div className="program">
           <a href="https://www.w3schools.com/html/" ><img src={html} alt="" /></a>
        </div>

        <div className="program">
            <a href="https://www.w3schools.com/css/"><img src={css} alt="" /></a>
        </div>

        <div className="program">
            <a href="https://www.w3schools.com/js/DEFAULT.asp"><img src={js} alt="" /></a>
        </div>
      
    </div>
  )
}

export default Program
