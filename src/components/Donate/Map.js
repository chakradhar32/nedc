/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

const Map = () => {
  const data = [
    {
      heading: 'Informed Consent to Donate Embryos',
      link: 'View or Download',
    },
    {
      heading: 'Agreement for open Donation/Adoption',
      link: 'View or Download',
    },
    {
      heading: 'Embryo Donation Medical checklist',
      link: 'View or Download',
    },
    {
      heading: 'Embryo Donor Family Information',
      link: 'View or Download',
    },
    {
      heading: 'Release of Information',
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
        <h2>Donation Resources</h2>
        <p>
          We know you probably have a lot of questions about the embryo donation process. We’ve
          complied some helpful resources here for your benefit but, if you have any questions or
          need additional information, please do not hesitate to contact us toll free at
          866-585-8549.
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
