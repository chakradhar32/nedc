/** @jsx jsx */
import * as React from 'react';
import AboutUs from '../components/About/AboutUs';
import Staff from '../components/About/Staff';
import History from '../components/About/History';
import Layout from '../components/Layout/index';
import Header from '../components/Common/Header';
import { Seo } from '../components/Seo';
import { jsx } from 'theme-ui';

const AboutPage = () => {
  const data = [
    {
      title: 'Our Families',
      description:
        'Though the vast majority of our families have historically lived in North America, the NEDC serves and is open to families from all over the world. ',
      image: '/images/chart-current-patients-2.png',
    },
    {
      title: 'Multiracial Embryos',
      description:
        'The NEDC has a significant number of multi-racial embryos available. No matter your background, the NEDC can help you complete your family. ',
      image: '/images/chart-multiracial-embryos.png',
    },
    {
      title: 'Our Embryos',
      description: 'Embryos of all ethnicities have been donated to the NEDC. ',
      image: '/images/chart-our-embryos.png',
    },
  ];
  return (
    <Layout>
      <Seo title="About NEDC | National Embryo Donation Center" />
      <div>
        <Header
          title="About the NEDC"
          description={'The Leading Comprehensive Non-Profit Embryo Donation Program'}
          cta={'Adopt Embryos'}
          ctaLink={'/adoption'}
          video={'https://www.youtube.com/embed/O_HW2x6qbbg'}
        />
        <AboutUs />
        <section>
          <div className="content">
            {data.map((item, index) => {
              return (
                <div
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '2rem',
                    alignItems: 'center',
                    justifyContent: 'center',
                    py: '3rem',
                  }}
                >
                  <div
                    sx={{
                      bg: '#f5f5f4',
                      flex: ['1 0 100%', null, null, '1 0 calc(30% - 1rem)'],
                      maxWidth: ['100%', null, null, 'calc(30% - 1rem)'],
                      p: '2rem',
                      order: index === 1 ? 0 : 1,
                    }}
                  >
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <div
                    sx={{
                      flex: '1 0 calc(70% - 1rem)',
                      maxWidth: '600px',
                    }}
                  >
                    <img src={item.image} alt="" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <Staff />
        <History />
      </div>
    </Layout>
  );
};

export default AboutPage;
