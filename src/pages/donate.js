import * as React from 'react';
import Header from '../components/Donate/Header';
import Data from '../components/Donate/Data';
import App from '../components/Donate/App';
import Map from '../components/Donate/Map';
import Card from '../components/Donate/Card';
import Layout from '../components/Layout/index';

const DonatePage = () => {
  return (
    <Layout>
      <div>
        <Header />
        <Data />
        <App />
        <Map />
        <Card />
      </div>
    </Layout>
  );
};

export default DonatePage;
