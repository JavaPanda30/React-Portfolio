import React from 'react';
import image from './favicon.ico';
import './IconImage.css';
import {Link} from 'react-router-dom';
function IconImage() {
  return (
      <div className='icon-content'>
        <div className='nav_name'>
          <div>Suyash Pandey</div>
          <div>React Developer</div>
        </div>
        <Link to='./'>
        <img className='navbar__icon' src={image} alt="" />
        </Link>
      </div>
  );
}

export default IconImage;
