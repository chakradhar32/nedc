import * as React from 'react';
import Header from '../components/ChildrenBooks/Header';
import About from '../components/ChildrenBooks/About';
import Card from '../components/ChildrenBooks/Card';
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
