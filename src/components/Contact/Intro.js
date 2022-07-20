/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import SectionHeader from '../Common/SectionHeader';
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Intro = () => {
  return (
    <section>
      <div
        className="content"
        sx={{
          mt: '3rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <SectionHeader heading={'Contact NEDC'} />
        <div
          className="content"
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: '3rem',
          }}
        >
          <div
            sx={{
              flex: '1 0 30%',
              maxWidth: '30%',
            }}
          >
            <div sx={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
              <FaMapMarkerAlt />
              <div>
                <h3
                  sx={{
                    fontWeight: 500,
                    fontSize: '20px',
                    lineHeight: '30px',
                    color: '#666666',
                  }}
                >
                  National Embryo Donation Center
                </h3>
                <a
                  sx={{
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: '#8BBFBD',
                  }}
                  href="/"
                >
                  11126 Kingston PikeKnoxville, TN 37934
                </a>
              </div>
            </div>

            <div sx={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
              <FaPhone />
              <div>
                <h4
                  sx={{
                    fontWeight: 500,
                    fontSize: '20px',
                    lineHeight: '30px',
                    color: '#666666',
                  }}
                >
                  Phone
                </h4>
                <a
                  sx={{
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: '#8BBFBD',
                  }}
                  href="/"
                >
                  +865-777-2013
                </a>
                <div>
                  <p
                    sx={{
                      ontFamily: 'Inter',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '24px',
                      color: '#666666',
                    }}
                  >
                    Toll-Free:
                  </p>
                  <a
                    sx={{
                      ontFamily: 'Inter',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '24px',
                      color: '#8BBFBD',
                    }}
                    href="/"
                  >
                    8666-585-8549
                  </a>
                </div>
                <div>
                  <p
                    sx={{
                      ontFamily: 'Inter',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '24px',
                      color: '#666666',
                    }}
                  >
                    Fax:
                  </p>
                  <a
                    sx={{
                      ontFamily: 'Inter',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '24px',
                      color: '#8BBFBD',
                    }}
                    href="/"
                  >
                    865-777-2016
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            sx={{
              flex: '1 0 70%',
              maxWidth: '70%',
            }}
          >
            <img src="https://source.unsplash.com/random/800x400" alt="" />
          </div>
        </div>
        <div>
          <h2
            sx={{
              fontWeight: 400,
              fontSize: ['1.5rem', null, '2.5rem'],
              lineHeight: 1.15,
              color: '#666666',
            }}
          >
            Got questions? We’re here to help.
          </h2>
          <p
            sx={{
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '30px',
              color: '#666666',
            }}
          >
            Do you have a success story? Maybe some questions or concerns. We would love to hear
            from you. Please leave some information and your question, comment, or concern, and we
            will contact you as soon as we can! Thank you for supporting the National Embryo
            Donation Center.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
