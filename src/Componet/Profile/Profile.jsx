import React from 'react'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../Profilecard/ProfileCard'
import FollowersCards from '../Followercard/FollowersCards'

import './profile.css'
export const Profile = () => {
  return (
    <div className='profileSlide'>
        <LogoSearch/>
        <ProfileCard/>
        <FollowersCards/>
        
        
    </div>
  )
}
export default Profile
