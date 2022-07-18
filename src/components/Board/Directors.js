/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import SectionHeader from '../Common/SectionHeader';

const Data = () => {
  return (
    <section>
      <div
        sx={{
          maxWidth: '1400px',
          mx: 'auto',
          mt: '3rem',
        }}
      >
        <SectionHeader heading="Board of Directors" icon="🏆" />
        <p sx={{}}>
          The National Embryo Donation Center Board of Directors oversees the NEDC. Our board
          members come from a lot of different backgrounds. They also have different interests. But
          what unites them is the desire to help couples complete their families through embryo
          adoption. To learn more about our board members, read their bios below.
        </p>
      </div>
    </section>
  );
};

export default Data;
