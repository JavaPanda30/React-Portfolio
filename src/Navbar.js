import React from 'react'
import './Navbar.css'
import IconImage from './IconImage'
import Navlist from './Navlist'

function Navbar() {
  return (
    <>
    <div className='nav_container'>
    <Navlist/>
    <IconImage/>
    </div>
    <hr className='linebr'/>
    </>
  )
}

export default Navbar