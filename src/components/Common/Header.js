/** @jsx jsx */

import React from 'react';
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';

const Header = ({ title, cta, ctaLink, description, image }) => {
  return (
    <header
      sx={{
        background: 'rgba(75, 147, 142, 0.9)',
      }}
    >
      <div
        sx={{
          maxWidth: '1400px',
          mx: 'auto',
          display: 'flex',
          alignItems: 'center',
          py: '4rem',
          px: ['1rem', null, '2rem'],
          height: '100%',
          minHeight: 550,
        }}
      >
        <div
          sx={{
            flex: '1 0 50%',
            maxWidth: '50%',
          }}
        >
          <p
            sx={{
              fontSize: '60px',
              lineHeight: '60px',
              color: '#FFFFFF',
              mb: '24px',
            }}
          >
            {title}
          </p>
          {description && (
            <p
              sx={{
                fontSize: '30px',
                lineHeight: '36px',
                letterSpacing: '0.09em',
                color: '#FFFFFF',
                my: '1rem',
              }}
            >
              {description}
            </p>
          )}
          {cta && (
            <Link
              to={ctaLink}
              sx={{
                display: 'block',
                my: '1rem',
                fontSize: '16px',
                color: ' #FFFFFF',
                p: '1rem 1.5rem',
                background: ' #F7A496',
                borderRadius: '5px',
                maxWidth: '250px',
                textAlign: 'center',
              }}
            >
              {cta}
            </Link>
          )}
        </div>
        {image && (
          <div
            sx={{
              flex: '1 0 50%',
              maxWidth: '50%',
            }}
          >
            <img sx={{ maxWidth: '100%' }} src={image} alt="" />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
