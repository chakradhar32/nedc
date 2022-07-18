/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

const Data = () => {
  return (
    <section>
      <div
        sx={{
          maxWidth: '1400px',
          mx: 'auto',
          display: 'flex',
          justifyContent: 'center',
          mt: '4rem',
          gap: '42px',
        }}
      >
        <div
          sx={{
            background: '#F5F5F5',
            borderRadius: '10px',
            width: '300px',
          }}
        >
          <h1
            sx={{
              fontFamily: 'Adobe Devanagari',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '50px',
              lineHeight: '50px',
              color: '#666666',
            }}
          >
            Our Embroys
          </h1>
          <p
            sx={{
              fontFamily: 'Adobe Devanagari',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '25px',
              textAlign: 'center',
            }}
          >
            Embryos of all ethnicities have been donated to the NEDC.
          </p>
        </div>
        <div>
          <img src="https://source.unsplash.com/random/700x400" alt="" />
        </div>
      </div>
      <hr
        sx={{
          mt: '3rem',
        }}
      />
    </section>
  );
};

export default Data;
