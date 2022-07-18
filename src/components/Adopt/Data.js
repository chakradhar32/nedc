/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

const Data = () => {
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
        <p>What is the first step?</p>
        <p>Why choose embryo adoption?</p>
        <p>Why choose the NEDC?</p>
        <p>
          During the selection process, can I obtain the grades (quality) of the embryos I'm
          choosing?
        </p>
        <p>Who can adopt?</p>
        <p>Can I adopt embryos of a different ethnicity?</p>
        <p>Can I adopt embryos with known potential for genetic or other abnormalities?</p>
        <p>Can I select the sex of the embryo or embryos I adopt?</p>
        <p>Will we need to travel?</p>
        <p>Are there lodging accommodations nearby?</p>
        <p>How long does it take?</p>
        <p>
          Acupuncture has been part of my infertility treatment. Is that service available near the
          NEDC?
        </p>
        <p>Why is screening necessary?</p>
        <p>Will the genetic parents know our or the child’s identity? </p>
        <p>Is this really adoption?</p>
        <p>Can genetic parents change their minds and get the child?</p>
        <p>Can embryo adoption lead to infections in the mother?</p>
        <p>Is embryo adoption associated with birth defects?</p>
        <p>What are my chances for a successful pregnancy?</p>
        <p>How many embryos will be transferred to my uterus?</p>
        <p>Is there a chance for multiple births?</p>
        <p>How many attempts can I have to become pregnant?</p>
        <p>What are the costs?</p>
      </div>
    </section>
  );
};

export default Data;
