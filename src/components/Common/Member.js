/** @jsx jsx */
import React, { useState } from 'react';
import { jsx } from 'theme-ui';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Member = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div sx={{ maxWidth: '400px', minWidth: '400px' }}>
      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <div sx={{ display: 'flex', gap: '1rem' }}>
          <div sx={{ width: '4rem', height: '4rem', borderRadius: '50%', flex: '0 0 4rem' }}>
            <img
              src={data.img || 'https://source.unsplash.com/random/300/?person'}
              alt=""
              sx={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '50%' }}
            />
          </div>
          <div sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h4 sx={{ color: '#61A19E', fontSize: '1.25rem' }}>{data.name}</h4>
            <p sx={{ mt: '0.5rem', fontSize: '0.75rem' }}>{data.position}</p>
          </div>
        </div>
        <div>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</div>
      </div>
      <div sx={{ pl: '5rem', mt: '0.5rem' }}>
        {isOpen && (
          <div
            sx={{
              p: {
                lineHeight: '1rem',
              },
            }}
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
        )}
      </div>
    </div>
  );
};

export default Member;
