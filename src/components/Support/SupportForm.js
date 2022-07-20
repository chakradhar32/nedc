/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

const SupportForm = () => {
  return (
    <section>
      <h3>Support Today</h3>
      <p>
        Give life & hope to families and children with a secure, tax deductible gift directly
        through this website. THANK YOU for being a difference-maker!{' '}
      </p>
      <form className="content">
        <div>
          <h4>Personal Info</h4>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Phone" />
          <textarea placeholder="comments" />
        </div>
        <div>
          <div>
            <h4>Donation Amount*</h4>
            <input type="text" placeholder="First Name" />
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
