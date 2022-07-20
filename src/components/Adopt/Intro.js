/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import SectionHeader from '../Common/SectionHeader';

const Intro = () => {
  return (
    <section>
      <div
        className="text-content"
        sx={{
          mx: 'auto',
          mt: '3rem',
          p: {
            mb: '1rem',
          },
        }}
      >
        <SectionHeader heading={'Adoption'} />
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

export default Intro;
