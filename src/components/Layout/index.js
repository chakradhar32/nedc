/** @jsx jsx */
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { jsx } from 'theme-ui';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
