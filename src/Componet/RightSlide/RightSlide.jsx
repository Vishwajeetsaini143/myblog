
import React from 'react'
import {AiFillSetting} from "react-icons/ai"
import './RightSlide.css'
import icon1 from './icon1.png'
import icon3 from './icon3.png'
import icon4 from './icon4.png'
import  {Link} from 'react-router-dom'
import Activefrnds from '../Active/Activefrnds'
const RightSlide = () => {
  return (
    <div className='right-side'>
      <div className='right-side-icon'>
      <img src={icon1} alt=""/>
      <Link className='link' to="/login"><AiFillSetting/></Link>
      <img src={icon3} alt=""/>
      <img src={icon4} alt=""/>
      </div>
      <Activefrnds/>
      
      


    </div>
  )
}

export default RightSlide