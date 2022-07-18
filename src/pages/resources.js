import * as React from 'react';
import Header from '../components/Resource/Header';
import About from '../components/Resource/About';
import Card from '../components/Resource/Card';
import Layout from '../components/Layout/index';

const ResourcePage = () => {
  return (
    <Layout>
      <div>
        <Header />
        <About />
        <Card />
      </div>
    </Layout>
  );
};

export default ResourcePage;
