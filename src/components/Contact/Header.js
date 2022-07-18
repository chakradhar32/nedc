/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

const Header = () => {
  return (
    <header
      sx={{
        background: ' rgba(75, 147, 142, 0.9)',
        height: '500px',
      }}
    >
      <div>
        <h2
          sx={{
            mt: '12px',
            fontFamily: 'Adobe Devanagari',
            fonStyle: 'normal',
            fontWeight: '400',
            fontSize: '60px',
            lineHeight: '80px',
            color: ' #FFFFFF',
          }}
        >
          Contact Us
        </h2>
      </div>
    </header>
  );
};

export default Header;
