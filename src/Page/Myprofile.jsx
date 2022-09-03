import React from 'react';
import FollowersCards from '../Componet/Followercard/FollowersCards';
import LogoSearch from '../Componet/LogoSearch/LogoSearch';
import PostSlide from '../Componet/PostSlide/PostSlide';
import ProfileCard from '../Componet/Profilecard/ProfileCard';
import RightSlide from '../Componet/RightSlide/RightSlide';

const Myprofile = () => {
  return (
    <div className='Home'>
        
        <div className="home-profile">
            <LogoSearch/>
            {/* your info */}
            
        </div>
        <div className="profile-center">
            
<PostSlide/>
<ProfileCard myprofile />
        </div>

        <div className="Home-rightslide">
            <FollowersCards/>
        </div>


    </div>
  )
}

export default Myprofile