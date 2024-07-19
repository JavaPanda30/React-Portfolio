import React from 'react';
import image from './favicon.ico';
import './IconImage.css';
import { Link } from 'react-router-dom';

function IconImage() {
  return (
    <div className='icon-container'>
      <div className='icon-content'>
        <div className='nav_name'>
          <div>Suyash Pandey</div>
          <div>Full Stack Developer</div>
        </div>
        <Link to='/'>
          <img className='navbar__icon' src={image} alt="Icon" />
        </Link>
      </div>
    </div>
  );
}

export default IconImage;
