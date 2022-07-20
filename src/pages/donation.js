import * as React from 'react';
import Header from '../components/Common/Header';
import Data from '../components/Donate/Data';
import App from '../components/Donate/App';
import Map from '../components/Donate/Map';
import Layout from '../components/Layout/index';
import Apply from '../components/Common/Apply';
import { Seo } from '../components/Seo';

const DonatePage = () => {
  return (
    <Layout>
      <Seo title="Donation | National Embryo Donation Center" />
      <div>
        <Header
          title="Donation"
          description="The Gift of Life"
          cta="Donate an Embryo"
          ctaLink="/donation"
          video="https://www.youtube.com/embed/DkQ_y9Wleco"
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
