/** @jsx jsx */
import * as React from 'react';
import Header from '../components/Common/Header';
import Intro from '../components/Donate/Intro';
import Faqs from '../components/Donate/Faqs';
import Layout from '../components/Layout/index';
import Apply from '../components/Common/Apply';
import { Seo } from '../components/Seo';
import Resources from '../components/Common/Resources';
import AskingQuestions from '../components/Donate/AskingQuestions';
import WhyDonate from '../components/Donate/WhyDonate';
import DonateAtoZ from '../components/Donate/DonateAtoZ';
import AfterDonation from '../components/Donate/AfterDonation';
import Legal from '../components/Donate/Legal';
import Anonymity from '../components/Donate/Anonymity';
import SectionHeader from '../components/Common/SectionHeader';
import { jsx } from 'theme-ui';

const DonatePage = () => {
  const data = [
    {
      title: 'Informed Consent to Donate Embryos',
      link: 'https://www.embryodonation.org/wp-content/uploads/2019/04/Donor-Packet-8-Informed-Consent-2019.pdf',
    },
    {
      title: 'Agreement for open Donation/Adoption',
      link: 'https://www.embryodonation.org/wp-content/uploads/2015/01/NEDC_Agreement_for_Open_Donation_and_Adoption.pdf',
    },
    {
      title: 'Embryo Donation Medical checklist',
      link: 'https://www.embryodonation.org/wp-content/uploads/2015/01/NEDC_Embryo_Donation_Checklist.pdf',
    },
    {
      title: 'Embryo Donor Family Information',
      link: 'https://www.embryodonation.org/wp-content/uploads/2015/01/NEDC_Donor_Bio_Information.pdf',
    },
    {
      title: 'Release of Information',
      link: 'https://www.embryodonation.org/wp-content/uploads/2015/01/NEDC-Release-of-Information-Form.pdf',
    },
  ];
  return (
    <Layout>
      <Seo title="Donation | National Embryo Donation Center" />
      <div>
        <Header
          title="Donation"
          description="The Gift of Life"
          cta="Donate Embryos"
          ctaLink="/donation"
          video="https://www.youtube.com/embed/DkQ_y9Wleco"
        />
        <Intro />
        <AskingQuestions />
        <WhyDonate />
        <DonateAtoZ />
        <AfterDonation />
        <section>
          <div className="content">
            <h2 sx={{ textAlign: 'center', fontSize: ['1.5rem', null, '2.5rem'], mb: '2rem' }}>
              Communication of Information with donor information with donor conceived children and
              realities of DNA testing opportunities
            </h2>
            <p>
              <b>
                We encourage all Donor Families and Recipient Families to be open and honest with
                their children regarding their birth stories. There are many books many books and
                websites available to help guide you through this journey.
              </b>
            </p>
          </div>
        </section>
        <Legal />
        <Faqs />

        <Anonymity />
        <Resources
          data={data}
          description={`We know you probably have a lot of questions about the embryo donation process. We’ve
          complied some helpful resources here for your benefit but, if you have any questions or
          need additional information, please do not hesitate to contact us toll free at
          <b>866-585-8549.</b>`}
          title="Donation Resources"
        />
        <Apply />
      </div>
    </Layout>
  );
};

export default DonatePage;
