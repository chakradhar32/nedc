/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

const SectionHeader = ({ heading, icon }) => {
  return (
    <div sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '62px',
          height: '62px',
          background: '#DDEFED',
          border: '8px solid #F4FDFC',
          borderRadius: '50px',
        }}
      >
        <img src={icon} alt="" />
      </div>
      <h3
        sx={{
          fontWeight: 400,
          fontSize: '50px',
          lineHeight: '80px',
          color: '#666666',
          mx: 'auto',
          textAlign: 'center',
          mt: '8px',
        }}
      >
        {heading}
      </h3>
    </div>
  );
};

export default SectionHeader;
