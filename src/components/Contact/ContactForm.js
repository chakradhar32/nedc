/** @jsx jsx */
import { jsx } from 'theme-ui';
import Button from '../Common/Button';

const ContactForm = () => {
  return (
    <section>
      <div
        className="text-content"
        sx={{
          mt: '3rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div>
          <h2
            sx={{
              fontWeight: 400,
              fontSize: ['1.5rem', null, '2.5rem'],
              lineHeight: 1.15,
              color: '#666666',
            }}
          >
            Got questions? We’re here to help.
          </h2>
          <p
            sx={{
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: ['1rem', null, '1.5rem'],
              lineHeight: '30px',
              color: '#666666',
            }}
          >
            Do you have a success story? Maybe some questions or concerns. We would love to hear
            from you. Please leave some information and your question, comment, or concern, and we
            will contact you as soon as we can! Thank you for supporting the National Embryo
            Donation Center.
          </p>
        </div>
      </div>
      <form className="text-content">
        <div sx={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <div
            sx={{
              flex: ['1 0 100%', null, '1 0 calc(50% - 1rem)'],
              maxWidth: ['100%', null, 'calc(50% - 1rem)'],
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              'input, textarea': {
                border: '1px solid #ccc',
                p: '1rem',
                borderRadius: '0.5rem',
              },
            }}
          >
            <h4>Personal Info</h4>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Phone" />
            <textarea placeholder="Comment/ Question" />
          </div>
          <div
            sx={{
              flex: ['1 0 100%', null, '1 0 calc(50% - 1rem)'],
              maxWidth: ['100%', null, 'calc(50% - 1rem)'],
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              'input, textarea': {
                border: '1px solid #ccc',
                p: '1rem',
                borderRadius: '0.5rem',
              },
            }}
          >
            <h4>Address</h4>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Phone" />
            <label htmlFor="newsletter">
              <input type="checkbox" name="newsletter" id="newsletter" /> NewsLetter Signup
            </label>
          </div>
        </div>
        <div sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button type="secondary">Submit</Button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
