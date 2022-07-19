import * as React from 'react';
import Header from '../components/Common/Header';
import About from '../components/Adopt/About';
import Data from '../components/Adopt/Data';
import Map from '../components/Adopt/Map';
import Layout from '../components/Layout/index';
import Apply from '../components/Common/Apply';
import { SEO } from '../components/Seo';


const AdoptPage = () => {
  return (
    <Layout>
      <div>
        <SEO title="Adoption | National Embryo Donation Center" />
        <Header
          title="Adoption"
          description="The Gift of Life."
          cta="Adopt Embryos"
          ctaLink="/adopt"
          image="https://source.unsplash.com/random/700x400"
        />
        <About />
        <Data />
        <Map />
        <Apply />
      </div>
    </Layout>
  );
};

export default AdoptPage;
