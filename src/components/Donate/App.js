/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

const App = () => {
  return (
    <section
      sx={{
        background: 'rgba(75, 147, 142, 0.9)',
        mt: '3rem',
        py: '32px',
      }}
    >
      <div
        sx={{
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '20px',
          //lineHeight: '30px',
          color: '#666666',
          bg: '#FFFFFF',
          maxWidth: '1400px',
          mx: 'auto',
        }}
      >
        <p>What is the process</p>
        <p>Why choose the NEDC?</p>
        <p>How do we get started?</p>
        <p>Where should I send my embryos for donation?</p>
        <p>If I donate embryos, what is the likelihood they will be adopted?</p>
        <p>What is the chance of embryos successfully implanting?</p>
        <p>Is there a cost to donate embryos?</p>
        <p>What types of donation are available?</p>
        <p>If I change my mind, can I get my embryos back?</p>
        <p>Who can adopt?</p>
        <p>Can I decide to whom my embryos will go?</p>
        <p>Are the adopting couples screened?</p>
        <p>Will we be responsible for our embryos or have parental rights?</p>
        <p>
          Could the children from the embryo donation inadvertently meet their siblings and
          reproduce?
        </p>
        <p>Do I have any legal liability?</p>
        <p>What will happen to my embryos if I choose not to donate them?</p>
      </div>
    </section>
  );
};

export default App;
