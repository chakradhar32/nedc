/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

import { FaTwitterSquare, FaFacebookSquare, FaGooglePlusSquare } from 'react-icons/fa';

const Data = () => {
  const data = [
    {
      title: 'Embryo Adoption Stories: The Georges',
      description:
        'Your soul will be touched by this embryo adoption story, told firsthand by NEDC...',
      link: 'Read Post',
    },
    {
      title: 'Embryo Adoption Stories: The Georges',
      description:
        'Your soul will be touched by this embryo adoption story, told firsthand by NEDC...',
      link: 'Read Post',
    },
    {
      title: 'Embryo Adoption Stories: The Georges',
      description:
        'Your soul will be touched by this embryo adoption story, told firsthand by NEDC...',
      link: 'Read Post',
    },
    {
      title: 'Embryo Adoption Stories: The Georges',
      description:
        'Your soul will be touched by this embryo adoption story, told firsthand by NEDC...',
      link: 'Read Post',
    },
    {
      title: 'Embryo Adoption Stories: The Georges',
      description:
        'Your soul will be touched by this embryo adoption story, told firsthand by NEDC...',
      link: 'Read Post',
    },
    {
      title: 'Embryo Adoption Stories: The Georges',
      description:
        'Your soul will be touched by this embryo adoption story, told firsthand by NEDC...',
      link: 'Read Post',
    },
  ];
  return (
    <section
      sx={{
        mt: '3rem',
      }}
    >
      <div
        sx={{
          maxWidth: '1400px',
          mx: 'auto',
          display: 'flex',
        }}
      >
        {data.map((item) => (
          <div
            sx={{
              border: '1px solid',
              width: '400px',
              // display: 'flex',
              //flexDirection: 'column'
            }}
          >
            <div>
              <img src="https://source.unsplash.com/random/400x200" alt="" />
            </div>
            <h4
              sx={{
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '20px',
                lineHeight: '30px',
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
                fontSize: '18px',
                lineHeight: '24px',
                color: '#666666',
                width: '300px',
              }}
            >
              {item.description}
            </p>
            <a
              sx={{
                textDecoration: 'none',
              }}
              href="/"
            >
              {item.link}
            </a>
            <div
              sx={{
                color: '#999999',
              }}
            >
              <FaTwitterSquare />
              <FaFacebookSquare />
              <FaGooglePlusSquare />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Data;
