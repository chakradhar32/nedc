import * as React from 'react';
import AboutUs from '../components/About/AboutUs';
import Map from '../components/About/Map';
import Pie from '../components/About/Pie';
import Data from '../components/About/Data';
import Author from '../components/About/Author';
import History from '../components/About/History';
import Layout from '../components/Layout/index';
import Header from '../components/Common/Header';

const AboutPage = () => {
  return (
    <Layout>
      <div>
        <Header
          title="About NEDC"
          description={'The Leading Comprehensive Non-Profit Embryo Donation Program'}
          cta={'Adopt Embryos'}
          ctaLink={'/adopt'}
          image={'https://source.unsplash.com/random/700x400'}
        />
        <AboutUs />
        <Map />
        <Pie />
        <Data />
        <Author />
        <History />
      </div>
    </Layout>
  );
};

export default AboutPage;
