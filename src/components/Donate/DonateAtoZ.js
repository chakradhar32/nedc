/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import SectionHeader from '../Common/SectionHeader';

const DonateAtoZ = () => {
  return (
    <section>
      <div className="text-content">
        <SectionHeader heading="DONATING YOUR EMBRYOS FROM A TO Z" />
        <p>
          You can apply to donate your embryos to the NEDC by clicking on the option “Apply to
          Donate” on the bottom right portion of our website. This will take you to our donor
          database, where you will have the opportunity to complete the application to donate your
          embryos.
        </p>
        <p>
          -Once you have added your information to the database, click the “Submit” button. You
          should receive an email confirming successful submission of your application along with an
          attached packet for you to complete. This packet contains consent forms which must be
          signed and notarized.
        </p>
        <p>
          -Once we receive your completed packet, we will request medical records from the fertility
          clinic where your embryos were created.
        </p>
        <p>
          -Upon receipt and review of your medical records, you will then receive orders for
          infectious disease lab testing. This lab work must be completed so we can reassure
          potential recipients about the safety of accepting your embryos.
        </p>
        <p>
          -When we receive your lab results, your Embryo Donor Profile will be submitted for final
          review to our medical director.
        </p>
        <p>
          -Once your profile receives a signature of final approval, we will then arrange for the
          shipment of your embryos to our embryology lab. We will cover all lab charges and any
          embryo shipping and handling charges.
        </p>
      </div>
    </section>
  );
};

export default DonateAtoZ;
