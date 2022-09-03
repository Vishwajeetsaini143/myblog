import React from 'react'
import followersData from '../../Store/followersData'
import './Followers.css'
const FollowersCards = () => {
  return (
    <div className='follow-p'>
      <h1>Who is follow you</h1>
      {
        followersData?.map((person)=>{
          return(
            <>
            <div className='follow-name'>
              <div className='follow-name1'>
                <img src={person.img} alt="" />
              </div>
              <div className='follow-name2'>
                <h3>{person.name}</h3>
                <h5>{person.username}</h5>
              </div>
              <div className='follow-follow'>
                <h5>follow</h5>
              </div>
              

            </div>
            
                
              
            </>
          )
        })
      }
            <h2>See More</h2>
    </div>
  )
}

export default FollowersCards