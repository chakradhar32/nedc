/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import SectionHeader from '../Common/SectionHeader';

const PlannedGiving = () => {
  return (
    <section sx={{ my: '2rem' }}>
      <div className="text-content">
        <SectionHeader heading="Planned Giving" />
        <div
          sx={{
            p: {
              mb: '1rem',
            },
          }}
        >
          <p>
            Want to bless families and children by giving life and hope in a way that outlasts your
            own lifetime? Prayerfully consider a legacy gift to the NEDC. There are a variety of
            ways you can help fund the NEDC’s work for decades to come:
          </p>
          <ul
            sx={{
              pl: '2rem',
              li: {
                mb: '1rem',
              },
            }}
          >
            <li>
              <b>Include the NEDC in your will.</b> Have your attorney add a charitable bequest for
              the NEDC to your will or estate plan. You can direct how you would like us to use your
              gift.
            </li>
            <li>
              <b>Designate the NEDC as an insurance beneficiary.</b> Designate the NEDC to receive
              all or part of the proceeds of a life insurance policy. To do this, just ask your
              insurance company for a beneficiary designation form.
            </li>
            <li>
              <b>Include the NEDC in your retirement plan.</b> Designate the NEDC to receive part or
              all of what remains of your retirement plan after your death. This is a tax-efficient
              way for you to bless others and ensure your money has the greatest possible impact.
              For instance, heirs of a large estate may receive as little as one-third of a
              retirement plan after estate and income taxes are factored in. However, because
              charities do not pay income taxes on donations received, distributions to the NEDC
              will not be taxed as income.
            </li>
            <li>
              <b>Set up a trust benefiting the NEDC.</b> Establishing a charitable remainder trust
              can provide income and tax benefits to you during your lifetime, and then pass those
              benefits on to the NEDC after your death. We would be glad to confidentially discuss
              with you the tax and income benefits available to you and your family through a
              charitable remainder trust.
            </li>
          </ul>

          <p>
            For more information on making a planned giving commitment to the NEDC, please contact
            our development office at (865) 777-2013 x3 or{' '}
            <a href="mailto:mmellinger@baby4me.net">mmellinger@baby4me.net</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlannedGiving;
