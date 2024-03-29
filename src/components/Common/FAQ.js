/** @jsx jsx */
import { useState } from 'react';
import { jsx } from 'theme-ui';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Faq = ({ data }) => {
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
          color: '#666',
          p: '1.25rem',
          borderRadius: '0.25rem 0.25rem 0 0',
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
          <div sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h4 sx={{ fontSize: '1.25rem' }}>{data.question}</h4>
          </div>
        </div>
        <div>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</div>
      </div>
      <div
        sx={{
          pt: '0.5rem',
          px: '2.5rem',
          bg: '#fff',
          color: '#666',
          borderRadius: '0 0 0.25rem 0.25rem',
        }}
      >
        {isOpen
          ? data.answer && (
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
                dangerouslySetInnerHTML={{ __html: data.answer }}
              />
            )
          : null}
      </div>
    </div>
  );
};

export default Faq;
