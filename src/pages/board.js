import * as React from 'react';
import Directors from '../components/Board/Directors';
import Layout from '../components/Layout/index';
import Header from '../components/Common/Header';
import { Seo } from '../components/Seo';

const BoardPage = () => {
  return (
    <Layout>
      <Seo title="Board Of Directors | National Embryo Donation Center" />
      <Header title="Board of Directors" />
      <Directors />
    </Layout>
  );
};

export default BoardPage;
