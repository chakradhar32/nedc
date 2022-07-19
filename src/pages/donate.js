import * as React from 'react';
import Header from '../components/Common/Header';
import Data from '../components/Donate/Data';
import App from '../components/Donate/App';
import Map from '../components/Donate/Map';
import Layout from '../components/Layout/index';
import Apply from '../components/Common/Apply';
import { SEO } from '../components/Seo';

const DonatePage = () => {
  return (
    <Layout>
      <div>
        <SEO title="Donation | National Embryo Donation Center" />
        <Header
          title="Donation"
          description="The Gift of Life"
          cta="Donate an Embryo"
          ctaLink="/donate"
          image="https://source.unsplash.com/random/700x400"
        />
        <Data />
        <App />
        <Map />
        <Apply />
      </div>
    </Layout>
  );
};

export default DonatePage;
