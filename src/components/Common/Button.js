/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

const Button = ({ type = 'default', onClick, text }) => {
  let bg = '#F7A496';
  let bgHover = '#FFF';
  let color = '#fff';
  if (type === 'secondary') {
    bg = '#61A19E';
    color = '#fff';
  } else if (type === 'default') {
    bg = '#FFF';
    bgHover = '#61A19E';
    color = '#61A19E';
    colorHover = '#fff';
  }
  return (
    <button
      onClick={onClick}
      sx={{
        display: 'inline-block',
        my: '1rem',
        fontSize: '16px',
        color: ' #FFFFFF',
        p: '1rem 1.5rem',
        bg,
        borderRadius: '5px',
        border: `1px solid ${bg}`,
        maxWidth: '250px',
        minWidth: '200px',
        textAlign: 'center',
        '&:hover': {
          bg: bgHover,
        },
      }}
    >
      {text}
    </button>
  );
};

export default Button;
