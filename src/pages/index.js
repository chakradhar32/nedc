import * as React from 'react';
import Header from '../components/Common/Header';
import WhatWeDo from '../components/Home/WhatWeDo';
import Blog from '../components/Home/Blog';
import EmbryoAdoption from '../components/Home/EmbryoAdoption';
import SignUp from '../components/Home/SignUp';
import Apply from '../components/Home/Apply';
import Layout from '../components/Layout/index';

const Homepage = () => {
  return (
    <Layout>
      <div>
        <Header
          title={'National Embryo Donation Center'}
          description={'Giving Life. Giving Hope.'}
          cta={'Donate an Embryo'}
          ctaLink={'/donate'}
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
