import * as React from 'react';
import Header from '../components/Common/Header';
import Data from '../components/Donate/Data';
import Faqs from '../components/Donate/Faqs';
import Layout from '../components/Layout/index';
import Apply from '../components/Common/Apply';
import { Seo } from '../components/Seo';
import Resources from '../components/Common/Resources';

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
          cta="Donate Embryo"
          ctaLink="/donation"
          video="https://www.youtube.com/embed/DkQ_y9Wleco"
        />
        <Data />
        <Faqs />
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
