/** @jsx jsx */
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { jsx } from 'theme-ui';
import { Helmet } from 'react-helmet';

const Layout = ({ children }) => {
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
      />

      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
