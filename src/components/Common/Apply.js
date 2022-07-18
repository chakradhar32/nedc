/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';

const Apply = () => {
  const data = [
    {
      title: 'Apply for Adoption',
      description:
        'We understand your desire to complete your family, and embryo adoption allows you an adoption alternative to the experience of pregnancy and childbirth.',
      ctaLink: '/adopt',
    },
    {
      title: 'Apply for Donation',
      description:
        'This is your chance to give life and hope to another family! Thank you for valuing these precious lives. Begin filling out the NEDC application to donate embryos.',
      ctaLink: '/donate',
    },
  ];
  return (
    <section
      sx={{
        background: '#EFF9F8',
      }}
    >
      <div
        sx={{
          display: 'flex',
          justifyContent: 'center',
          maxWidth: '1400px',
          padding: '4rem',
          mx: 'auto',
          gap: '32px',
        }}
      >
        {data.map((item) => {
          return (
            <div
              sx={{
                maxWidth: '600px',
                background: ' #FFFFFF',
                boxShadow: '0px 4px 8px rgba(186, 228, 224, 0.5)',
                padding: '4rem',
                textAlign: 'center',
              }}
            >
              <h3
                sx={{
                  fontWeight: 400,
                  fontSize: '2.75rem',
                  lineHeight: '50px',
                  textAlign: 'center',
                  color: '#666666',
                }}
              >
                {item.title}
              </h3>
              <p
                sx={{
                  fontSize: '20px',
                  lineHeight: '30px',
                  textAlign: 'center',
                  color: '#666666',
                  my: '1.5rem',
                }}
              >
                {item.description}
              </p>
              <Link
                to={item.ctaLink}
                sx={{
                  display: 'inline-block',
                  border: '1px solid #8BBFBD',
                  borderRadius: '5px',
                  px: '42px',
                  py: '8px',
                }}
              >
                Get Started
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Apply;
