import React from 'react'
import './Campus.css'
import mongo from '../../assets/mongo.png'
import express from '../../assets/express.png'
import react from '../../assets/react.png'
import node from '../../assets/nodejs.png'

const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
           <img src={mongo} alt="" />
           <img src={express} alt="" />
           <img src={react} alt="" />
           <img src={node} alt="" />

        </div>
      
    </div>
  )
}

export default Campus

