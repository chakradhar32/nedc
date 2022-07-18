/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

const About = () => {
  return (
    <section>
      <div
        sx={{
          maxWidth: '1400px',
          mx: 'auto',
          mt: '3rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          sx={{
            width: '125px',
            height: '125px',
            background: '#8BBFBD',
            border: '10px solid #D7EFED',
            borderRadius: '80px',
          }}
        >
          <img src="" alt="" />
        </div>
        <h4
          sx={{
            fontFamily: 'Adobe Devanagari',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '50px',
            lineHeight: '50px',
            color: '#666666',
            textAlign: 'center',
            mb: '32px',
          }}
        >
          Contact NEDC
        </h4>
      </div>
    </section>
  );
};

export default About;
