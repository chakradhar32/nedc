import * as React from 'react';
import Header from '../components/Common/Header';
import Address from '../components/Contact/Address';
import ContactForm from '../components/Contact/ContactForm';
import Layout from '../components/Layout/index';
import { Seo } from '../components/Seo';

const ContactPage = () => {
  return (
    <Layout>
      <Seo title="Contact Us | National Embryo Donation Center" />
      <div>
        <Header title="Contact Us" />
        <Address />
        <ContactForm />
      </div>
    </Layout>
  );
};

export default ContactPage;
