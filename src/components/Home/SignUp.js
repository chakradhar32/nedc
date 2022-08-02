/** @jsx jsx */
import { jsx } from 'theme-ui';

const SignUp = () => {
  return (
    <section>
      <div
        className="content"
        sx={{
          maxWidth: '1400px',
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
        }}
      >
        <div
          sx={{
            flex: ['1 0 100%', null, null, '1 0 calc(50% - 1rem)'],
            maxWidth: ['100%', null, null, 'calc(50% - 1rem)'],
            p: '1rem',
          }}
        >
          <h3
            sx={{
              fontWeight: 400,
              fontSize: ['1.25rem', null, '2.25rem'],
              lineHeight: 1.15,
              mb: '1rem',
              color: ' #666666',
            }}
          >
            Sign Up for Our Newsletter
          </h3>
          <p
            sx={{
              fontSize: '20px',
              lineHeight: '30px',
              color: ' #666666',
            }}
          >
            If you're interested in getting occasional email updates from NEDC, please provide us
            with your name and email address below. These updates are partially for marketing
            purposes and usually include pressure-free fundraising appeals. Signing up obligates you
            to nothing and you may unsubscribe at any time. Your information will not be shared and
            you will not be added to any direct mail lists.
          </p>
          <form
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              py: '12px',
              borderRadius: '6px',
            }}
          >
            <input
              sx={{ padding: '12px', border: '1px solid #666666', borderRadius: '6px' }}
              type="text"
              placeholder="Name*"
              required
            />
            <input
              sx={{ padding: '12px', border: '1px solid #666666', borderRadius: '6px' }}
              type="text"
              placeholder="Email*"
              required
            />
            <input
              sx={{ padding: '12px', border: '1px solid #666666', borderRadius: '6px' }}
              type="text"
              placeholder="Phone number*"
              required
            />
          </form>
          <p
            sx={{
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '30px',
              color: ' #666666',
            }}
          >
            This field is for validation purposes and should be left unchanged.
          </p>
          <button
            sx={{
              display: 'inline-block',
              mt: '16px',
              background: ' #8BBFBD',
              border: '1px solid #8BBFBD',
              borderRadius: '5px',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '40px',
              color: ' #FFFFFF',
              px: '42px',
              '&:hover': {
                bg: '#FFF',
                color: '#88BFBD',
              },
            }}
          >
            Submit
          </button>
        </div>
        <div
          sx={{
            flex: ['1 0 100%', null, '1 0 calc(50% - 1rem)'],
            maxWidth: ['100%', null, 'calc(50% - 1rem)'],
            p: '1rem',
          }}
        >
          <img
            src="/images/home-callout-img-2.jpg"
            alt=""
            sx={{ height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
