/** @jsx jsx */
import * as React from 'react';
import Header from '../components/Common/Header';
import Intro from '../components/Support/Intro';
import PlannedGiving from '../components/Support/PlannedGiving';
import SupportForm from '../components/Support/SupportForm';
import Layout from '../components/Layout/index';
import { Seo } from '../components/Seo';
import { jsx } from 'theme-ui';

const SupportPage = () => {
  return (
    <Layout>
      <Seo title="Support | National Embryo Donation Center" />
      <div>
        <Header
          title={'Support the NEDC'}
          description="Giving Life. Giving Hope. Building Families."
          cta="Learn More About NEDC"
          ctaLink="/about"
        />
        <Intro />
        <div sx={{ maxWidth: '960px', mx: 'auto', my: '2rem' }}>
          <iframe
            title="donation-form"
            style={{ height: '600px', width: '95%', border: '1px solid #dddddd' }}
            src="https://www.flipcause.com/widget/NjMxMg=="
            width="300"
            height="150"
          ></iframe>
        </div>
        <PlannedGiving />
        <SupportForm />
      </div>
    </Layout>
  );
};

export default SupportPage;
