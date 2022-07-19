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
        <SectionHeader icon={''} heading="Donation FAQs" />
        <div
          sx={{
            p: {
              mb: '1rem',
            },
          }}
        >
          <p>
            You know the pain of not being able to have children. But you also know the joy of
            finally being able to conceive through IVF. Now that your family is complete, what
            happens to your remaining embryos? <b>Consider donating them to another couple</b> Through
            donation, you’re bringing joy to another couple. <b>Please be aware that, because we are
              always helping a very large number of donors, the donation process with the NEDC does
              take time: typically 6 to 9 months once we have all the information we need from you.</b>
            But we will see the process through to completion, and our medical partners will take
            wonderful care of your embryos once they’re here. We give your embryos the best chance
            for life in a loving, stable family. Meet one of those families in the video below.
          </p>
          <p>
            This is a way to give the opportunity for life. Plus, you’re <a href="https://www.embryodonation.org/adoption/">sharing the blessing of children with others.</a>. You will have input in the family selection process. The National
            Embryo Donation Center is a non-profit organization that helps both embryo donors and
            recipients.
          </p>
          <br />
          <p>
            Start your application and help someone start a family today. <b>There are no fees for
              donors!</b>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Data;
