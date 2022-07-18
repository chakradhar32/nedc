import * as React from 'react';
import Directors from '../components/Board/Directors';
import Layout from '../components/Layout/index';
import Header from '../components/Donate/Header';

const BoardPage = () => {
  return (
    <Layout>
      <Header title="Board of Directors" />
      <Directors />
    </Layout>
  );
};

export default BoardPage;
