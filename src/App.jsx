import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Program/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle="BEGINNER" title="Start with Front-End"/>
      <Program/>
      <Title subTitle="ADVANCED" title="Back-End (MERN)"/>
      <Campus/>
      <About/>
      <Title subTitle="CONTACT US" title="Share your Thoughts"/>
      <Contact/>
      <Footer/>
      
      </div>
     
    </div>
  )
}

export default App
