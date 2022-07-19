import * as React from 'react';
import Header from '../components/Contact/Header';
import About from '../components/Contact/About';
import Layout from '../components/Layout/index';
import { SEO } from '../components/Seo';

const ContactPage = () => {
  return (
    <Layout>
      <div>
        <SEO title="Contact Us | National Embryo Donation Center" />
        <Header />
        <About />
      </div>
    </Layout>
  );
};

export default ContactPage;
