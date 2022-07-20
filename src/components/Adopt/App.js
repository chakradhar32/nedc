/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

const App = () => {
  return (
    <section
      sx={{
        background: '#EFF9F8',
        mt: '3rem',
      }}
    >
      <div
        className="content"
        sx={{
          display: 'flex',
          gap: '32px',
        }}
      >
        <div
          sx={{
            width: '600px',
            background: ' #FFFFFF',
            boxShadow: '0px 4px 8px rgba(186, 228, 224, 0.5)',
            padding: '42px',
            textAlign: 'center',
          }}
        >
          <h3
            sx={{
              fontWeight: 400,
              fontSize: ['1.5rem', null, '2.5rem'],
              lineHeight: 1.15,
              textAlign: 'center',
              color: '#666666',
            }}
          >
            Apply for Adoption
          </h3>
          <p
            sx={{
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '30px',
              textAlign: 'center',
              color: '#666666',
            }}
          >
            We understand your desire to complete your family, and embryo adoption allows you an
            adoption alternative to the experience of pregnancy and childbirth.
          </p>
          <button
            sx={{
              border: '1px solid #8BBFBD',
              borderRadius: '5px',
              px: '42px',
              py: '8px',
            }}
          >
            Get Started
          </button>
        </div>
        <div
          sx={{
            width: '600px',
            background: ' #FFFFFF',
            boxShadow: '0px 4px 8px rgba(186, 228, 224, 0.5)',
            padding: '42px',
            textAlign: 'center',
          }}
        >
          <h3
            sx={{
              fontWeight: 400,
              fontSize: ['1.5rem', null, '2.5rem'],
              lineHeight: 1.15,
              textAlign: 'center',
              color: '#666666',
            }}
          >
            Apply for Donation
          </h3>
          <p
            sx={{
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '30px',
              textAlign: 'center',
              color: '#666666',
            }}
          >
            This is your chance to give life and hope to another family! Thank you for valuing these
            precious lives. Begin filling out the NEDC application to donate embryos.
          </p>
          <button
            sx={{
              border: '1px solid #8BBFBD',
              borderRadius: '5px',
              background: '#8BBFBD',
              color: ' #FFFFFF',
              px: '42px',
              py: '8px',
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default App;
