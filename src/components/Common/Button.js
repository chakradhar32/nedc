/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

const Button = ({ type = 'default', onClick, children }) => {
  let bg = '#F7A496';
  let bgHover = '#FFF';
  let color = '#fff';
  let colorHover = '#F7A496';
  let border = '#F7A496';
  if (type === 'primary') {
    bg = '#F7A496';
    bgHover = '#FFF';
    color = '#fff';
    colorHover = '#F7A496';
    border = '#F7A496';
  } else if (type === 'secondary') {
    color = '#61A19E';
    bg = '#fff';
    border = '#61A19E';
    bgHover = '#61A19E';
    colorHover = '#fff';
  } else if (type === 'default') {
    bg = '#61A19E';
    color = '#fff';
    border = '#61A19E';
    colorHover = '#61A19E';
    bgHover = '#fff';
  }

  return (
    <button
      onClick={onClick}
      sx={{
        display: 'inline-block',
        my: '1rem',
        fontSize: '16px',
        color,
        p: '1rem 1.5rem',
        bg,
        borderRadius: '5px',
        border: `1px solid ${border}`,
        maxWidth: '250px',
        minWidth: '200px',
        textAlign: 'center',
        '&:hover': {
          bg: bgHover,
          color: colorHover,
        },
      }}
    >
      {children}
    </button>
  );
};

export default Button;
