/** @jsx jsx */

import { jsx } from 'theme-ui';
import { Link } from 'gatsby';

const FeaturedSection = () => {
  const data = [
    {
      title: 'Embryo Adoption Stories',
      description:
        'Do you want more personal information about embryo donation and adoption? Read stories from NEDC families who have walked through this journey.',
      icon: '/images/adoptionStoriesIcon.png',
      link: '/stories',
    },
    {
      title: 'Childrens Books for Your Family',
      description:
        'How do you tell your children about their unique adoption, or should you? Check out several books that will help satisfy your child’s curiosity about where they came from and reinforce your love for them.',
      icon: '/images/childrenBooksIcon.png',
      link: 'resources',
    },
    {
      title: 'Questions and Answers',
      description:
        'Have questions about embryo adoption? You are not alone. We can answer some of those most frequently asked by those curious about this life-affirming family-building option.',
      icon: '/images/faqIcon.png',
      link: '/adoption',
    },
  ];

  return (
    <section
      sx={{
        display: 'flex',
        justifyContent: 'center',
        minHeight: '580px',
        background: 'rgba(75, 147, 142, 0.9)',
      }}
    >
      <div
        className="text-content"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          maxWidth: '1400px',
          py: '4rem',
          letterSpacing: '0.05rem',
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
                padding: '0.75rem',
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
                  height: '60px',
                  mb: '1rem',
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
                  maxHeight: '168px',
                  overflow: 'hidden',

                  fontSize: '16px',
                  lineHeight: '24px',
                  textAlign: 'center',
                  // my: '1rem',
                  // mt: '46px'
                }}
              >
                {/* width,height given to description and title */}
                {/* minor change in description */}
                {item.description}
              </p>
              <Link
                to={item.link}
                sx={{
                  display: 'block',
                  mt: '1rem',
                  color: '#FFFFFF',
                  background: 'transparent',
                  fontSize: '16px',
                  lineHeight: '20px',
                  border: '1px solid #FFFFFF',
                  borderRadius: '5px',
                  padding: '12px 32px',
                  textAlign: 'center',
                  maxWidth: '250px',
                  '&:hover': {
                    background: '#F7A496',
                  },
                }}
              >
                Find Out More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;
