import React from 'react';
import './Header.css';
import { profile1 } from "../../images";
import Facts from './Facts'

const Header = () => {
  return (
    <header id='header' className='blur-effect'>
      <div className='stroke_text intro_text'>HELLO</div>
      <div className='section_wrapper header_container'>
        <div className='column intro_container blur-effect'>
          <div className='header_info'>
            <div className='header_info_top'>
              Hello There! I'm <span className='color_primary'>Thisara Kandage</span>
            </div>
            <div className='header_info_middle'>
              <h1 className='primary_title header_title'>I'M A WEB DEVELOPER</h1>
              <p className='text_muted header_description'>
                I dissect intricate user experience challenges to engineer integrity-focused
                solutions that resonate with billions of users. 
              </p>
            </div>
            <Facts/>
            <div className='header_info_bottom'>
            <a href="https://linkedin.com/in/thisara-kandage-4b2904249" target="_blank" rel="noopener noreferrer" className='btn'>
    LinkedIn
</a>
 <br></br>
              <a href="mailto:thisarak943@gmail.com" className="btn">Email Me</a>
            </div>
          </div>
        </div>
        <div className='column profile_wrapper'>
          <div className="profile_photo_container">
            <img src={profile1} className='profile_photo' alt="Profile" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
