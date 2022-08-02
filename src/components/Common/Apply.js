/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';

const Apply = () => {
  const data = [
    {
      title: 'Apply for Adoption',
      description:
        'We understand your desire to complete your family, and embryo adoption allows you an adoption alternative to the experience of pregnancy and childbirth.',
      ctaLink: '/adoption',
    },
    {
      title: 'Apply for Donation',
      description:
        'This is your chance to give life and hope to another family! Thank you for valuing these precious lives. Begin filling out the NEDC application to donate embryos.',
      ctaLink: '/donation',
    },
  ];
  return (
    <section
      sx={{
        background: '#EFF9F8',
      }}
    >
      <div
        className="content"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          padding: '4rem',
          gap: '32px',
        }}
      >
        {data.map((item) => {
          return (
            <div
              sx={{
                maxWidth: '640px',
                background: ' #FFFFFF',
                boxShadow: '0px 4px 8px rgba(186, 228, 224, 0.5)',
                padding: '4rem',
                textAlign: 'center',
              }}
            >
              <h3
                sx={{
                  fontWeight: 400,
                  fontSize: ['1rem', null, '2rem'],
                  lineHeight: '50px',
                  textAlign: 'center',
                  color: '#666666',
                }}
              >
                {item.title}
              </h3>
              <p
                sx={{
                  fontSize: ['0.75rem', null, '1.25rem'],
                  lineHeight: '30px',
                  textAlign: 'center',
                  color: '#666666',
                  my: '1.5rem',
                }}
              >
                {item.description}
              </p>
              <Link
                to={item.ctaLink}
                sx={{
                  display: 'inline-block',
                  bg: '#8BBFBD',
                  color: '#FFFFFF',
                  fontSize: ['0.75rem', null, '1rem'],
                  border: '1px solid #8BBFBD',
                  borderRadius: '5px',
                  px: '3rem',
                  py: '1rem',
                  '&:hover': {
                    bg: 'transparent',
                    color: '#666666',
                  },
                }}
              >
                Get Started
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Apply;
