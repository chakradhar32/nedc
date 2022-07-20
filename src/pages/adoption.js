import * as React from 'react';
import Header from '../components/Common/Header';
import Intro from '../components/Adopt/Intro';
import Data from '../components/Adopt/Data';
import Map from '../components/Adopt/Map';
import Layout from '../components/Layout/index';
import Apply from '../components/Common/Apply';
import { Seo } from '../components/Seo';

const AdoptPage = () => {
  return (
    <Layout>
      <Seo title="Adoption | National Embryo Donation Center" />
      <div>
        <Header
          title="Adoption"
          description="The Gift of Life."
          cta="Adopt Embryos"
          ctaLink="/adoption"
          video="https://www.youtube.com/embed/v8HmMfQW8qA"
        />
        <Intro />
        <Data />
        <Map />
        <Apply />
      </div>
    </Layout>
  );
};

export default AdoptPage;
