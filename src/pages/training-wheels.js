import * as React from 'react';
import Header from '../components/Common/Header';
import Intro from '../components/ChildrenBooks/Intro';
import Card from '../components/ChildrenBooks/Card';
import Layout from '../components/Layout/index';
import { Seo } from '../components/Seo';

const ResourcePage = () => {
  return (
    <Layout>
      <Seo title="Children books | National Embryo Donation Center" />
      <div>
        <Header
          title="Resources For Kids"
          cta="Buy a book today"
          ctaLink="#books"
          description="How did I get here?"
        />
        <Intro />
        <section>
          <Card />
        </section>
      </div>
    </Layout>
  );
};

export default ResourcePage;
