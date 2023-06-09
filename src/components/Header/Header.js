import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../assests/images/logo.svg';
import styles from '../../styles/Header/Header.module.scss';

function Header() {

  const [navShow, setNavShow] = useState(false);

  const handleNavOpen = () => {
    setNavShow(true);
  }

  const handleNavClose = () => {
    setNavShow(false);
  }


  return (
    <div data-testid='header' className={styles.Header}>
      <nav className="flex items-center justify-between flex-wrap p-5 lg:pl-10 lg:pr-10">
        <div className="flex items-center flex-shrink-0 mr-6">
          <Link to='/'>
            <img src={logo} />
          </Link>
        </div>
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

        <div className={`${styles.nav} w-full flex-grow lg:flex lg:items-center lg:w-auto ${navShow == true ? 'block' : 'hidden'}`}>
          <div className="text-md lg:flex-grow flex justify-end gap-5">
            <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 font-normal text-black uppercase">
              Home
            </Link>
            <Link to="/blog" className={`${styles.active} block mt-4 lg:inline-block lg:mt-0 font-normal uppercase`}>
              Blog
            </Link>
          </div>

        </div>
      </nav>
    </div>
  )
}

export default Header