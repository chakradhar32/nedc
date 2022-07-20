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
        className="text-content"
        sx={{ flexDirection: 'column', display: 'flex', alignItems: 'center' }}
      >
        <SectionHeader heading={title} icon='' />
        <p dangerouslySetInnerHTML={{ __html: description }} />

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
            <a
              key={item.title}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '1rem',
                width: '250px',
              }}
              href={item.link}
            >
              <div>
                <CgFileDocument />
              </div>
              <h4 sx={{ textAlign: 'center', color: '#666' }}>{item.title}</h4>
              <p sx={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                View or Download <FaArrowRight />{' '}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
