/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

const About = () => {
  return (
    <section>
      <div
        sx={{
          maxWidth: '1400px',
          mx: 'auto',
          mt: '3rem',
        }}
      >
        <div
          sx={{
            width: '125px',
            height: '125px',
            background: '#8BBFBD',
            border: '10px solid #D7EFED',
            borderRadius: '80px',
          }}
        >
          <img src="" alt="" />
        </div>
        <h4
          sx={{
            fontFamily: 'Adobe Devanagari',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '50px',
            lineHeight: '50px',
            color: '#666666',
            textAlign: 'center',
            mb: '32px',
          }}
        >
          Adaption FAQs
        </h4>
        <p>
          The National Embryo Donation Center (NEDC) understands your desire to have a family,
          possibly through embryo adoption. So we’re here to help!
        </p>
        <p>
          When couples go through in vitro fertilization (IVF), sometimes there are fertilized eggs
          (embryos) that remain and are frozen for later use. When couples decide that their family
          is complete but still have embryos remaining, there are a few options. They can donate
          them to a couple who is unable to conceive. Couples can donate the embryos to research. Or
          they can thaw them, removing their chance of being born. A fourth option is to keep them
          frozen and continue to pay storage fees, but this is not a decision!
        </p>
        <p>
          Embryo adoption allows the genetic parents to give their embryos a chance for life. And it
          provides you with an opportunity to have children. Embryo adoption allows you to
          experience pregnancy and the birth of a child. Watch the video and check out the list of
          FAQs below to learn more.
        </p>
      </div>
    </section>
  );
};

export default About;
