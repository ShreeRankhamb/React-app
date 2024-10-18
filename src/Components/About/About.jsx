import React from 'react'
import './About.css'
import thumbnail from '../../assets/thumbnail.webp'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
           <a href="https://www.youtube.com/watch?v=BrW2ug4NP9A&pp=ygUcZnVsbCBzdGFjayBkZXZlbG9wZXIgcm9hZG1hcA%3D%3D" ><img src={thumbnail} alt="" className='about-img'/></a>
        </div>
        <div className="about-right">
            <h3>Basics to Advanced</h3>
            <h2>Complete Roadmap for Web Development</h2>

            <p>WsCube Tech offers the best job-oriented online certification courses in digital marketing, 
                web/app development, cyber security, data science & more.They have almost every programming
                courses available </p>

        </div>
      
    </div>
  )
}

export default About
