import React, {useState} from 'react'
import {Link} from 'react-router-dom';
function Navbar() {
    const {click, setClick} = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <>
         <nav className='navbar'>
            <div className='navbar-container'>
                <Link to ="/" >
                    NJR  <i className='fa-solid fa-face-grin-hearts'></i>
                    <i className='fab fa-typo3'/>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click? 'fas fa-times':'fas fa-bars'} />
                    </div>
                </Link>
            </div>
         </nav>
        </>
    )
}

export default Navbar
