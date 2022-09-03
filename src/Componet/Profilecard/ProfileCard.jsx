import React from 'react'
import bg1 from './bg1.jpg'
import bg2 from './bg2.jpg'
import './Profilecard.css'
import {Link} from 'react-router-dom'
const ProfileCard = ({myprofile}) => {
  return (
    <>
    <div className='profilecard'>
      
      <div className='profilecard-img'>
        <img src={bg1} alt='' className='bg1' />
        <img src={bg2} alt=''  className='bg2'/>
        
      </div>
      <div className='profilecard-text'>
        <h3>username</h3>
        <span>Senoir Ui/UX Designer</span>
      </div>
      <div className='profile-followers'>
      <div className='followers'>
        <h4>0</h4>
        <h5>Foollowers</h5>
      </div>
      <div className='following'>
        <h4>0</h4>
        <h5>Following</h5>
      </div>
      {
        myprofile &&  <div className='following'>
        <h4>0</h4>
        <h5>Post</h5>
      </div>
      }
      
      
      </div>


{!myprofile &&  <Link to='/profile' className='link-btn'>My Profile</Link>}
     
      
    </div>
    </>
  )
}

export default ProfileCard