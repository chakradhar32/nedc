/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';

const EmbryoAdoption = () => {
  return (
    <section>
      <div
        className="content"
        sx={{
          maxWidth: '1400px',
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid #E6E6E6',
        }}
      >
        <div
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
          }}
        >
          <div
            sx={{
              flex: ['1 0 100%', null, '1 0 calc(70% - 1rem)'],
              maxWidth: ['100%', null, 'calc(70% - 1rem)'],
            }}
          >
            <img
              src={'/images/home-callout-img-1.jpg'}
              alt=""
              sx={{ maxHeight: '400px', objectFit: 'cover' }}
            />
          </div>

          <div
            sx={{
              flex: ['1 0 100%', null, '1 0 calc(30% - 1rem)'],
              maxWidth: ['100%', null, 'calc(30% - 1rem)'],
            }}
          >
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
                px: '2.5rem',
                py: '0.75rem',
                border: '1px solid #7CBBB8',
                borderRadius: '5px',
                color: ' #666666',
                textDecoration: 'none',
                '&:hover': {
                  bg: '#7CBBB8',
                  color: '#FFFFFF',
                },
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
