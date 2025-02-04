import React from 'react'
import Info from '../components/about/Info'
import Header from '../components/header/Header'
import "./About.css"

import Infoimage from '../components/about/Infoimage'

// const About = () => {
//   return (
//     <div>About</div>
//   )
// }
 
function About(){
    return(
        <div className='about'>
            <Header/> 
            <div className='about__contianer'>
               <Info/> 
               <Infoimage/>
            </div>
        </div>
    )
}
export default About