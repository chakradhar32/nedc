/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import Button from '../Common/Button';

const ContactForm = () => {
  return (
    <form>
      <div>
        <h4>Personal Info</h4>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Phone" />
        <textarea placeholder="Comment/ Question" />
      </div>
      <div>
        <h4>Address</h4>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Phone" />
        <label htmlFor="newsletter">
          <input type="checkbox" name="newsletter" id="newsletter" /> NewsLetter Signup
        </label>
      </div>
      <Button type="secondary">Submit</Button>
    </form>
  );
};

export default ContactForm;
