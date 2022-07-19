/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

const Card = () => {
  const data = [
    {
      title: 'Buy Chosen & Loved on Amazon',
      description: 'Click below to purchase your copy of Chosen & Loved.',
      button: 'BUY NOW',
    },
    {
      title: 'Buy Made With Love on Amazon',
      description: 'Click below to purchase your copy from Amazon.',
      button: 'BUY NOW',
    },
    {
      title: 'Buy Treasure Babies On Amazon',
      description: 'Click below to purchase your copy from Amazon.',
      button: 'BUY NOW',
    },
  ];
  return (
    <section
      sx={{
        background: '#EFF9F8',
        height: '500px',
      }}
    >
      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        {data.map((item) => (
          <div
            sx={{
              background: '#FFFFFF',
              borderRadius: '10px',
              width: '300px',
              maxWidth: '1400px',
              mx: 'auto',
            }}
          >
            <div>
              <h4
                sx={{
                  fontFamily: 'Adobe Devanagari',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '40px',
                  lineHeight: '40px',
                  textAlign: 'center',
                  color: '#101828',
                }}
              >
                {item.title}
              </h4>
              <p
                sx={{
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '20px',
                  lineHeight: '24px',
                  textAlign: 'center',
                  color: '#667085',
                }}
              >
                {item.description}
              </p>
              <button
                sx={{
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: '#FFFFFF',
                  textAlign: 'center',
                  background: '#8BBFBD',
                  padding: '12px,20px',
                }}
              >
                {item.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card;
