/** @jsx jsx */
import * as React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { jsx } from 'theme-ui';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main sx={{ mt: ['80px', '95px'] }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
