import React from 'react'
import  Profile  from '../Componet/Profile/Profile'
import PostSlide from '../Componet/PostSlide/PostSlide'
import RightSlide from '../Componet/RightSlide/RightSlide';
import '../home.css'
const Home = () => {
  return (
    <div className='Home'>
        <div className='Home-profile'>
            <Profile/>
        </div>
        <div className='Home-postslide'>
            <PostSlide/>;

        </div>
        <div className='Home-rightslide'>
            <RightSlide/>
        </div>

    </div>
  )
}

export default Home