import * as React from 'react';
import Header from '../components/Story/Header';
import About from '../components/Story/About';
import Data from '../components/Story/Data';
import Layout from '../components/Layout/index';

const StoryPage = () => {
  return (
    <Layout>
      <div>
        <Header />
        <About />
        <Data />
      </div>
    </Layout>
  );
};

export default StoryPage;
