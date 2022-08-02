/** @jsx jsx */
import { useState } from 'react';
import { jsx } from 'theme-ui';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Member = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div sx={{ maxWidth: '750px', width: '100%', mx: 'auto' }}>
      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '1rem',
          alignItems: 'center',
          cursor: 'pointer',
          bg: '#fff',
          p: '1.25rem',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        }}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        onKeyDown={() => {
          setIsOpen((prev) => !prev);
        }}
        role="button"
        tabIndex={data.index}
      >
        <div sx={{ display: 'flex', gap: '1rem' }}>
          <div sx={{ width: '4rem', height: '4rem', borderRadius: '50%', flex: '0 0 4rem' }}>
            <img
              src={data.image || 'https://source.unsplash.com/random/300/?person'}
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
      <div sx={{ pl: '6.25rem', pt: '0.5rem', pr: '2.5rem', bg: '#fff' }}>
        {isOpen
          ? data.description && (
              <div
                sx={{
                  pb: '2rem',
                  p: {
                    lineHeight: '1rem',
                  },
                  a: {
                    color: '#61A19E',
                  },
                }}
                dangerouslySetInnerHTML={{ __html: data.description }}
              />
            )
          : null}
      </div>
    </div>
  );
};

export default Member;
