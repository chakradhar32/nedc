import * as React from 'react';
import Header from '../components/Common/Header';
import ContactForm from '../components/Contact/ContactForm';
import Intro from '../components/Contact/Intro';
import Layout from '../components/Layout/index';
import { Seo } from '../components/Seo';

const ContactPage = () => {
  return (
    <Layout>
      <Seo title="Contact Us | National Embryo Donation Center" />
      <div>
        <Header title="Contact Us" />
        <Intro />
        <ContactForm />
      </div>
    </Layout>
  );
};

export default ContactPage;
