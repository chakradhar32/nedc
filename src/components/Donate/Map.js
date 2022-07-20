/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import Resources from '../Common/Resources';

const Map = () => {
  const data = [
    {
      title: 'Informed Consent to Donate Embryos',
      link: 'View or Download',
    },
    {
      title: 'Agreement for open Donation/Adoption',
      link: 'View or Download',
    },
    {
      title: 'Embryo Donation Medical checklist',
      link: 'View or Download',
    },
    {
      title: 'Embryo Donor Family Information',
      link: 'View or Download',
    },
    {
      title: 'Release of Information',
      link: 'View or Download',
    },
  ];
  return (
    <Resources
      data={data}
      description={`We know you probably have a lot of questions about the embryo donation process. We’ve
          complied some helpful resources here for your benefit but, if you have any questions or
          need additional information, please do not hesitate to contact us toll free at
          <b>866-585-8549.</b>`}
      title="Donation Resources"
    />
  );
};

export default Map;
