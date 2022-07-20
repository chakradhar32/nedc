/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import Resources from '../Common/Resources';

const Map = () => {
  const data = [
    {
      title: 'Application To Adopt Embryos',
      link: '/',
    },
    {
      title: 'NEDC FEE Schedule',
      link: '/',
    },
    {
      title: 'Instructions For Embryo Recepient Letter To Donors',
      link: '/',
    },
    {
      title: 'Flourish Consulting Services LLC Fee Summary',
      link: '/',
    },
  ];
  return (
    <Resources
      data={data}
      description={`We know this can be an exciting time and you probably have a lot of questions about the embryo adoption process. We’ve complied some helpful resources here for your benefit but, if you have any questions or need additional information, please do not hesitate to contact us at <b>865-777-2013</b> or call toll free at <b>866-585-8549.</b>`}
      title="Adoption Resources"
    />
  );
};

export default Map;
