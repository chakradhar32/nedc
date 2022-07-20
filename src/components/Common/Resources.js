/** @jsx jsx */
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { jsx } from 'theme-ui';
import { CgFileDocument } from 'react-icons/cg';
import SectionHeader from './SectionHeader';

const Resources = ({ title, data, description }) => {
  return (
    <section>
      <div
        className="content"
        sx={{ flexDirection: 'column', display: 'flex', alignItems: 'center' }}
      >
        <SectionHeader heading={title} />
        <p>{description}</p>

        <div
          sx={{
            display: 'flex',
            gap: '2.5rem',
            flexWrap: 'wrap',
            mt: '3rem',
            justifyContent: 'center',
          }}
        >
          {data.map((item) => (
            <div
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '1rem',
                width: '250px',
              }}
            >
              <div>
                <CgFileDocument />
              </div>
              <h4 sx={{ textAlign: 'center' }}>{item.title}</h4>
              <a href={item.link} sx={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                View or Download <FaArrowRight />{' '}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
