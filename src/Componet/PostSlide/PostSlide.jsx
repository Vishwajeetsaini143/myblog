import { GrGallery } from "react-icons/gr"
import {FaPhotoVideo} from "react-icons/fa"
import {GoLocation} from "react-icons/go"
import React from 'react'
import './PostSlide.css'
import bg3  from './bg3.png'
const PostSlide = () => {
  return (
    <div className='post-share'>
      <div>
      <img src={bg3} alt=''/>
      <input type="text" placeholder="#whats happening " />

      </div>
      <div className='share-option'>
        <div className='share-icons'>
          <span className='gallery'><GrGallery/></span>
          <span className="photos">Photos</span>
        </div>
        <div className='share-icons'>
          <span className='video'><FaPhotoVideo/></span>
          <span className='video'>Video</span>
        </div>
        <div className='share-icons'>
          <span className='location'><GoLocation/></span>
          <span className='location' >Location</span>
        </div>
        <button className="share-btn">Share</button>
      </div>


    </div>
  )
}

export default PostSlide