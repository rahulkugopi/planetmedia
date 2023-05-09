import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

function Layout() {

  return (
    <> 
      <div data-testid='Layout'>      
          <Outlet />
        </div>    
      <Footer />
    </>
  );
}

export default Layout;
