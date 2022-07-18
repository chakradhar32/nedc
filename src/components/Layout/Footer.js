/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaYoutubeSquare,
  FaInstagramSquare,
} from 'react-icons/fa';
const Footer = () => {
  return (
    <footer
      sx={{
        bg: '#8BBFBD',
        //height: '500px'
      }}
    >
      <div
        sx={{
          maxWidth: '1400px',
          mx: 'auto',
          display: 'flex',
          alignItems: 'center',
          padding: '64px 0px 48px',
        }}
      >
        <div>
          <h3
            sx={{
              color: '#FFFFFF',
              fontSize: '32px',
              fontStyle: 'normal',
            }}
          >
            nedc
          </h3>
          <p
            sx={{
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '24px',
              color: '#FFFFFF',
            }}
          >
            This material was made possible by grant #EAAPA131021-01-01 from the U.S. Department of
            Health and Human Services. The statements expressed are those of the grantee
            organization and do not necessarily represent the views of the Department.
          </p>
        </div>
        <div
          sx={
            {
              // display: 'flex',
              // gap: '24px'
            }
          }
        >
          <p
            sx={{
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '30px',
              color: '#FFFFFF',
            }}
          >
            National Embryo Donation Center, 11126 Kingston Pike Knoxville, TN 37934.
          </p>
          <p
            sx={{
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '24px',
              color: '#FFFFFF',
            }}
          >
            Phone:866-585-8549, Fax: 866-585-8549, Toll-Free: 866-585-8549.
          </p>
          <div
            sx={{
              color: '#FFFFFF',
              display: 'flex',
              gap: '1rem',
            }}
          >
            <FaTwitterSquare />
            <FaFacebookSquare />
            <FaYoutubeSquare />
            <FaInstagramSquare />
          </div>
        </div>
      </div>
      <div
        sx={{
          bg: ' #629B98',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <p
          sx={{
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '14px',
            py: '0.5rem',
            lineHeight: '24px',
            color: '#FFFFFF',
          }}
        >
          © 2022 National Embryo Donation Center. Privacy Policy. All rights reserved. Proudly
          hosted by Slamdot
        </p>
      </div>
    </footer>
  );
};

export default Footer;
