import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import CloseIcon from '@mui/icons-material/Close';

function Header() {

  const [navShow, setNavShow] = useState(false);

  const handleNavOpen = () => {
    setNavShow(true);
  }

  const handleNavClose = () => {
    setNavShow(false);
  }


  return (
    <div data-testid='header'>
      <nav className="flex items-center justify-between flex-wrap bg-black lg:bg-black/[.60] p-5 lg:pl-10 lg:pr-10">        
        <div className="block lg:hidden">
          {
            navShow == false ?
              <>
                <button className="flex items-center px-3 py-2" onClick={handleNavOpen}>
                  <MenuIcon className='text-lg text-white' />
                </button>
              </>

              :
              <>
                <button className="flex items-center px-3 py-2" onClick={handleNavClose}>
                  <CloseIcon className='text-lg text-white' />
                </button>
              </>
          }
        </div>

        <div className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${navShow == true ? 'block' : 'hidden'}`}>
          <div className="text-md lg:flex-grow justify-end">
            <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 font-medium text-white mr-8 uppercase">
              Home
            </Link>            
            <Link to="/blog" className="block mt-4 lg:inline-block lg:mt-0 font-medium text-white mr-8 uppercase">
              Blog
            </Link>            
          </div>
         
        </div>
      </nav>
    </div>
  )
}

export default Header