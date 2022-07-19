/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import SectionHeader from '../Common/SectionHeader';

const Adoption = () => {
  return (
    <section>
      <div
        sx={{
          maxWidth: '1400px',
          mx: 'auto',
          mt: '3rem',
        }}
      >
        <SectionHeader heading="Support the NEDC" />
        <div>
          <p>Learn about donating with cryptocurrency here!</p>
          <p>
            You can make a life-changing difference by investing in this work financially. Your
            giving protects the lives and dignity of human embryos. Your generous support also gives
            those struggling with infertility the chance to complete their families (a portion of
            each gift goes straight to the NEDC’s Family Building Grant, which helps couples in
            financial need afford embryo adoption).
          </p>

          <p>
            Investing in the NEDC also gets the word out to those for whom embryo adoption could be
            the perfect path to parenthood- they’re just waiting to be reached with the message!
            What a great feeling to build families and get the tiniest lives “out of the freezer.”
            YOU can make it happen! Now THAT’S making a difference!
          </p>

          <p>
            Want to partner in this work? We’ve made it easy to give in the way you prefer. Scroll
            down to contribute a gift or set up a regular giving plan through our secure online
            giving platform. If you scroll down a bit further, you’ll also find info about making an
            eternal difference with a legacy gift. Finally, at the bottom of the page, there is an
            option for you to make a gift directly through this secure website.
          </p>

          <p>
            The Evangelical Council for Financial Accountability (ECFA) has accredited the NEDC.
            That means we hold to established standards for financial accountability and
            transparency. When you give to the NEDC, you can be confident your money will go toward
            carrying out this life-giving mission!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Adoption;
