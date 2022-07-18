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
          Personal Stories
        </h4>
        <p sx={{}}>
          {' '}
          You can read all the medical information available. But sometimes you need to hear
          someone’s story to understand what will happen when you donate or adopt embryos. These
          embryo adoption stories give you insight into this very personal journey.
        </p>
      </div>
    </section>
  );
};

export default About;
