/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';

const EmbryoAdoption = () => {
  return (
    <section>
      <div
        sx={{
          py: '4rem',
          maxWidth: '1400px',
          mx: 'auto',
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid #E6E6E6',
        }}
      >
        <div
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
          }}
        >
          <div sx={{ flex: '1 0 50%', maxWidth: '50%' }}>
            <img src="https://source.unsplash.com/random/700x400" alt="" />
          </div>

          <div sx={{ flex: '1 0 50%', maxWidth: '50%' }}>
            <h3
              sx={{
                fontWeight: 500,
                fontSize: '30px',
              }}
            >
              Embryo Adoption
            </h3>
            <p sx={{ my: '2rem', fontSize: '1.25rem', color: '#666' }}>
              Check out this quick video in which one couple explains why embryo adoption was the
              best choice for them. (And meet their adorable son.)
            </p>
            <Link
              sx={{
                display: 'inline-block',
                fontWeight: 400,
                fontSize: '16px',
                px: '3rem',
                py: '8px',
                border: '1px solid #7CBBB8',
                borderRadius: '5px',
                color: ' #666666',
                textDecoration: 'none',
              }}
              href="/"
            >
              Watch Video
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmbryoAdoption;
