import * as React from 'react';
import Header from '../components/Common/Header';
import WhatWeDo from '../components/Home/WhatWeDo';
import FeaturedSection from '../components/Home/FeaturedSection';
import EmbryoAdoption from '../components/Home/EmbryoAdoption';
import SignUp from '../components/Home/SignUp';
import Apply from '../components/Common/Apply';
import Layout from '../components/Layout/index';
import { Seo } from '../components/Seo';

const Homepage = () => {
  return (
    <Layout>
      <Seo />
      <div>
        <Header
          title={'National Embryo Donation Center'}
          description={'Giving Life. Giving Hope.'}
          cta={'Adopt Embryos'}
          ctaLink={'/adoption'}
          //  image={'https://source.unsplash.com/random/700x400'}
          video={'https://www.youtube.com/embed/DoFgXFMrdLY'}
        />
        <WhatWeDo />
        <FeaturedSection />
        <EmbryoAdoption />
        <SignUp />
        <Apply />
      </div>
    </Layout>
  );
};

export default Homepage;
