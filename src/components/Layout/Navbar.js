/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';

const Navbar = () => {
  return (
    <nav
      sx={{
        maxWidth: '1400px',
        mx: 'auto',
      }}
    >
      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <div sx={{ py: '1rem' }}>
          <Link to="/">
            <img src="/images/logo.png" alt="" />
          </Link>
        </div>
        <div
          sx={{
            display: 'flex',
            gap: '36px',
            a: {
              color: '#666',
              fontSize: '14px',
            },
            'a:hover': {
              color: '#4B938EE5',
            },
          }}
        >
          <Link to="/about">About Us</Link>
          <Link to="/adopt">FAQs</Link>
          <Link to="/stories">Personal Stories</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/board">Board</Link>
          <Link to="/support">Support</Link>
          <Link to="/">Donate an Embryo</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
