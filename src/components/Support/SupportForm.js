/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import Button from '../Common/Button';

const SupportForm = () => {
  return (
    <section>
      <h3>Support Today</h3>
      <p>
        Give life & hope to families and children with a secure, tax deductible gift directly
        through this website. THANK YOU for being a difference-maker!{' '}
      </p>
      <form className="text-content">
        <div>
          <h4>Personal Info</h4>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Phone" />
          <textarea placeholder="Comments" />
        </div>
        <hr />
        <div>
          <div>
            <h4>Donation Amount*</h4>
            <select>
              <option value="">Select</option>
              <option value="">$50</option>
              <option value="">$100</option>
              <option value="">$200</option>
            </select>
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Phone" />
            <textarea />
          </div>
          <div>
            <h4>Billing Info</h4>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Phone" />
            <textarea />
          </div>
        </div>
        <Button type="secondary">Submit</Button>
      </form>
    </section>
  );
};

export default SupportForm;
