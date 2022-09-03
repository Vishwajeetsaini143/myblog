import React from 'react'
import {AiOutlineSearch} from "react-icons/ai"
import './LogoSearch.css'
import twiterlogo from './twiterlogo.png'
const LogoSearch = () => {
  return (
    <div className='logo-img'>
      <div className='logo'>
<img src={twiterlogo} alt=''/>
      </div>
      <div className='logo-search-box'>
        <input type='text' placeholder='#Explore'/>
     
      <div className='search-icon'><AiOutlineSearch/></div>
      </div>
    </div>
  )
}

export default LogoSearch