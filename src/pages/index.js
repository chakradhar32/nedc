import * as React from 'react';
import Header from '../components/Common/Header';
import WhatWeDo from '../components/Home/WhatWeDo';
import Blog from '../components/Home/Blog';
import EmbryoAdoption from '../components/Home/EmbryoAdoption';
import SignUp from '../components/Home/SignUp';
import Apply from '../components/Common/Apply';
import Layout from '../components/Layout/index';
import { SEO } from '../components/Seo';

const Homepage = () => {
  return (
    <Layout>
      <div>
        <SEO title=" " />
        <Header
          title={'National Embryo Donation Center'}
          description={'Giving Life. Giving Hope.'}
          cta={'Adopt Embryos'}
          ctaLink={'/adopt'}
          image={'https://source.unsplash.com/random/700x400'}
        />
        <WhatWeDo />
        <Blog />
        <EmbryoAdoption />
        <SignUp />
        <Apply />
      </div>
    </Layout>
  );
};

export default Homepage;
