/** @jsx jsx */

import React from 'react';
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';

const Blog = () => {
  const data = [
    {
      title: 'Embryo Adoption Stories',
      description:
        'Do you want more personal information about embryo donation and adoption? Read stories from NEDC families who have walked through this journey.',
      buttonText: 'Check Our Embryo Adoption Stories',
      icon: '/images/adoptionStoriesIcon.png',
      link: '/stories',
    },
    {
      title: 'Childrens Books for Your Family',
      description:
        'How do you tell your children about their unique adoption, or should you? Check out several books that will help satisfy your child’s curiosity about where they came from and reinforce your love for them.',
      buttonText: 'Find Out More',
      icon: '/images/childrenBooksIcon.png',
      link: 'resources',
      featured: true,
    },
    {
      title: 'Questions and Answers',
      description:
        'Have questions about embryo adoption? You are not alone. We can answer some of those most frequently asked by those curious about this life-affirming family-building option.',
      buttonText: 'Get Your Questions Answered',
      icon: '/images/faqIcon.png',
      link: '/adopt',
    },
  ];

  return (
    <section
      sx={{
        background: 'rgba(75, 147, 142, 0.9)',
      }}
    >
      <div
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          mt: '24px',
          maxWidth: '1400px',
          mx: 'auto',
          py: '4rem',
          px: '1rem',
        }}
      >
        {data.map((item) => (
          <div
            sx={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: '380px',
              padding: '1rem',
              alignItems: 'center',
            }}
          >
            <div
              sx={{
                width: '62px',
                height: '62px',
                background: '#DDEFED',
                border: '8px solid #F4FDFC',
                borderRadius: '50px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img src={item.icon} alt="" />
            </div>

            <div
              sx={{
                color: '#FFFFFF',
                mt: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <h3
                sx={{
                  fontWeight: 500,
                  fontSize: '26px',
                  px: '24px',
                  lineHeight: '1.15',
                  textAlign: 'center',
                }}
              >
                {item.title}
              </h3>
              <p
                sx={{
                  fontSize: '16px',
                  lineHeight: '24px',
                  textAlign: 'center',
                  my: '1rem',
                }}
              >
                {item.description}
              </p>
              <Link
                to={item.link}
                sx={{
                  display: 'block',
                  mt: '1rem',
                  color: '#FFFFFF',
                  background: item.featured ? '#F7A496' : 'transparent',
                  fontSize: '16px',
                  lineHeight: '20px',
                  border: item.featured ? '1px solid #F7A496' : '1px solid #FFFFFF',
                  borderRadius: '5px',
                  padding: '12px 32px',
                  textAlign: 'center',
                  maxWidth: '250px',
                }}
              >
                {item.buttonText}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
