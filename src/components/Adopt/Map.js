/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

const Map = () => {
  const data = [
    {
      heading: 'Application To Adopt Embryos',
      link: 'View or Download',
    },
    {
      heading: 'NEDC FEE Schedule',
      link: 'View or Download',
    },
    {
      heading: 'Instructions For Embryo Recepient Letter To Donors',
      link: 'View or Download',
    },
    {
      heading: 'Flourish Consulting Services LLC Fee Summary',
      link: 'View or Download',
    },
  ];
  return (
    <section
      sx={{
        background: '#FFFFFF',
        mt: '3rem',
      }}
    >
      <div
        sx={{
          maxWidth: '1400px',
          mx: 'auto',
        }}
      >
        <h2>Adoption Resources</h2>
        <p>
          We know this can be an exciting time and you probably have a lot of questions about the embryo adoption process. We’ve complied some helpful resources here for your benefit but, if you have any questions or need additional information, please do not hesitate to contact us at <b>865-777-2013</b> or call toll free at <b>866-585-8549.</b>
        </p>

        {data.map((item) => (
          <div>
            <div
              sx={{
                background: '#8FAEAD',
                width: '30px',
                height: '36px',
              }}
            >
              <img src="" alt="" />
            </div>
            <p
              sx={{
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '23px',
                lineHeight: '30px',
                width: '200px',
                color: '#101828',
              }}
            >
              {item.heading}
            </p>
            <a
              sx={{
                textDecoration: 'none',
              }}
              href="/"
            >
              {item.link}{' '}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Map;
