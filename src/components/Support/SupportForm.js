/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import Button from '../Common/Button';

const SupportForm = () => {
  return (
    <section>
      <div className="text-content">
        <div sx={{ mb: '2rem' }}>
          <h3 sx={{ fontSize: '1.5rem', mb: '0.5rem' }}>Support Today</h3>
          <p>
            Give life & hope to families and children with a secure, tax deductible gift directly
            through this website. THANK YOU for being a difference-maker!{' '}
          </p>
        </div>
        <form>
          <div
            sx={{
              display: 'flex',
              gap: '2rem',
              flexWrap: 'wrap',
              py: '2rem',
              borderBottom: '2px solid #000',
            }}
          >
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
              <input type="text" placeholder="Phone" />
              <textarea placeholder="Comments" />
            </div>
          </div>
          <div sx={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', mb: '2rem', py: '2rem' }}>
            <div
              sx={{
                flex: ['1 0 100%', null, '1 0 calc(50% - 1rem)'],
                maxWidth: ['100%', null, 'calc(50% - 1rem)'],
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                'input, textarea, select': {
                  border: '1px solid #ccc',
                  p: '1rem',
                  borderRadius: '0.5rem',
                },
              }}
            >
              <h4>Donation Amount*</h4>
              <select name="amount" id="amount">
                <option value="">Select Amount</option>
                <option value="25">$25</option>
                <option value="50">$50</option>
                <option value="100">$100</option>
                <option value="200">$200</option>
              </select>
              <div>
                <h4>Total</h4>
                <p>$25.00</p>
              </div>
              <div sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h4>Credit Card Info</h4>
                <input type="text" placeholder="Card Number" />
                <input type="text" placeholder="Expiration Date" />
                <input type="text" placeholder="Security Code" />
                <input type="text" placeholder="Cardholder name" />
              </div>
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
              <h4>Billing Info</h4>
              <input type="text" placeholder="Billing Address*" />
              <input type="text" placeholder="Billing City" />
              <input type="text" placeholder="State" />
              <input type="text" placeholder="Billing Zip*" />
            </div>
          </div>
          <div sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button type="secondary">Submit</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SupportForm;
