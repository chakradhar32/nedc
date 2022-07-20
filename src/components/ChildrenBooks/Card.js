/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

const Card = () => {
  const data = [
    {
      title: 'Buy Chosen & Loved on Amazon',
      description: 'Click below to purchase your copy of Chosen & Loved.',
      link: 'BUY NOW',
    },
    {
      title: 'Buy Made With Love on Amazon',
      description: 'Click below to purchase your copy from Amazon.',
      link: 'BUY NOW',
    },
    {
      title: 'Buy Treasure Babies On Amazon',
      description: 'Click below to purchase your copy from Amazon.',
      link: 'BUY NOW',
    },
  ];
  return (
    <section
      sx={{
        background: '#EFF9F8',
      }}
      id="books"
    >
      <div
        className="content"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: ' 2.5rem',
          flexWrap: 'wrap',
        }}
      >
        {data.map((item) => (
          <div
            sx={{
              background: '#FFFFFF',
              borderRadius: '10px',
              width: '300px',
              p: '2rem',
            }}
          >
            <div
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
              }}
            >
              <h4
                sx={{
                  fontWeight: 400,
                  fontSize: ['1.25rem', null, '2.25rem'],
                  lineHeight: 1.15,
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
              <a
                href={item.link}
                sx={{
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: '#FFFFFF',
                  textAlign: 'center',
                  background: '#8BBFBD',
                  padding: '12px 20px',
                  borderRadius: '0.25rem',
                  border: '1px solid #8BBFBD',
                  '&:hover': {
                    background: '#fff',
                    color: '#8BBFBD',
                  },
                }}
              >
                Buy Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card;
