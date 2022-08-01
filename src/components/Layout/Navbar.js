/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaTwitter, FaFacebookF, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const menuItems = [
    {
      name: 'About Us',
      slug: '/about-us',
    },
    {
      name: 'Donation',
      slug: '/donation',
    },
    {
      name: 'Adoption',
      slug: '/adoption',
    },
    {
      name: 'Support NEDC',
      slug: '/support-nedc',
    },
    {
      name: 'Personal Stories',
      slug: '/stories',
    },
    {
      name: 'Children Books',
      slug: '/training-wheels',
    },
    {
      name: 'Contact Us',
      slug: '/contact-us',
    },
  ];

  const [mobile, setMobile] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [width, setWidth] = useState(0);

  /**
   * Updates width when resized for responsiveness of menu item
   */
  const updateWidth = () => {
    const windowWidth = window.innerWidth;
    setWidth(windowWidth);
  };

  useEffect(() => {
    updateWidth();
    window.addEventListener('resize', updateWidth);
    if (width <= 1366) {
      setMobile(true);
    } else {
      setMobile(false);
    }
    return () => window.removeEventListener('resize', updateWidth);
  }, [width]);

  return (
    <>
      <nav
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
          bg: '#fff',
        }}
      >
        <div
          sx={{
            color: '#999999',
            bg: '#61A19E',
            a: {
              color: '#666',
            },
            'a:hover': {
              color: '#FFFFFF',
            },
          }}
        >
          <div sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'end',
            gap: '0.75rem',
            maxWidth: '1400px',
            margin: 'auto',
            px: '2rem',
            height: '50px',

          }}>
            <a href="/">
              <FaTwitter />
              {' '}
            </a>
            <a href="/">
              {' '}
              <FaFacebookF />
            </a>
            <a href="/">
              {' '}
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div
          sx={{
            maxWidth: '1400px',
            mx: 'auto',
            position: 'relative',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            px: '2rem',
          }}
        >
          <div sx={{ py: '1rem', flexShrink: '1' }}>
            <Link to="/">
              <img src="/images/logo.png" alt="" />
            </Link>
          </div>
          <div
            sx={{
              display: 'flex',
              gap: '0.75rem',
              alignItems: 'center',
              a: {
                color: '#666',
                fontSize: '14px',
                fontWeight: '500',
                padding: '1rem',
              },
              'a:hover': {
                color: '#4B938EE5',
              },
            }}
          >
            {!mobile &&
              menuItems.map((item) => (
                <Link key={item.slug} to={item.slug}>
                  {item.name}
                </Link>
              ))}
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
                minWidth: '175px',
                border: '1px solid #F7A496',
                '&:hover': {
                  background: ' transparent',
                  color: ' #F7A496 !important',
                },
              }}
            >
              Adopt Embryos
            </Link>
            {mobile && (
              <button onClick={() => setMenuVisible((prev) => !prev)}>
                {menuVisible ? <FaTimes /> : <FaBars />}
              </button>
            )}
          </div>
        </div>
        {menuVisible && (
          <div
            sx={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              bg: '#fff',
              zIndex: '999',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                px: '2rem',
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
              {menuItems.map((item) => (
                <Link key={item.slug} to={item.slug}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
