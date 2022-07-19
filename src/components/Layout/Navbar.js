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
            gap: '1rem',
            alignItems: 'center',
            a: {
              color: '#666',
              fontSize: '14px',
              padding: '1rem',
            },
            'a:hover': {
              color: '#4B938EE5',
            },
          }}
        >
          <Link to="/about">About Us</Link>
          <Link to="/adopt">FAQs</Link>
          <Link to="/stories">Personal Stories</Link>
          <Link to="/children-books">Resources</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/board">Board</Link>
          <Link to="/support-nedc">Support NEDC</Link>
          <Link
            to="/"
            sx={{
              display: 'block',
              my: '1rem',
              fontSize: '16px',
              color: ' #FFFFFF !important',
              p: '1rem 1.5rem !important',
              background: ' #F7A496',
              borderRadius: '5px',
              textAlign: 'center',
            }}
          >
            Adopt Embryos
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
