import React, {useState} from 'react'
import {Link} from 'react-router-dom';
function Navbar() {
    return (
        <>
         <nav className='navbar'>
            <div className='navbar-container'>
                <Link to ="/" >
                    NJR  <i className='fa-solid fa-face-grin-hearts'></i>
                </Link>
            </div>
         </nav>
        </>
    )
}

export default Navbar
