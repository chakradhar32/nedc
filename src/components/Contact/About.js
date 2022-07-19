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
        <div sx={{
          display: 'flex',
          alignItems: 'center',
          mb: '3rem'
        }}>
          <div sx={{
            flex: '1 0 30%',
            maxWidth: '30%'
          }}>
            <p sx={{
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: '20px',
              lineHeight: '30px',
              color: '#666666'
            }}>National Embryo Donation Center</p>
            <a sx={{
              ontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '24px',
              color: '#8BBFBD',
            }} href="/">11126 Kingston Pike Knoxville, TN 37934</a>
        <p sx={{
                ontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '30px',
                color: '#666666'
              }}>Phone</p>
              <a sx={{
                ontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '24px',
                color: '#8BBFBD',
              }} href="/">+865-777-2013</a>
              <p sx={{
                ontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '24px',
                color: '#666666',
              }}>Toll-Free:</p>
              <a sx={{
                ontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '24px',
                color: '#8BBFBD',
              }} href="/">8666-585-8549</a>
              <p sx={{
                ontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '24px',
                color: '#666666',
              }}>Fax:</p>
              <a sx={{
                ontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '24px',
                color: '#8BBFBD',
              }} href="/">865-777-2016</a>
          </div>
          <div sx={{
            flex: '1 0 70%',
            maxWidth: '70%'
          }}>
            <img src="https://source.unsplash.com/random/800x400" alt="" />
          </div>
        </div>
        <div>
          <h2 sx={{
            fontFamily: 'Adobe Devanagari',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '50px',
            lineHeight: '80px',
            color: '#666666'

          }}>Got questions? We’re here to help.</h2>
          <p sx={{
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '30px',
            color: '#666666'
          }}>Do you have a success story? Maybe some questions or concerns. We would love to hear from you. Please leave some information and your question, comment, or concern, and we will contact you as soon as we can! Thank you for supporting the National Embryo Donation Center.</p>
        </div>
    </div>                        
    </section> 
  ); 
};

export default About;
