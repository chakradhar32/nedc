/** @jsx jsx */
import { jsx } from 'theme-ui';
import SectionHeader from '../Common/SectionHeader';
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Address = () => {
  return (
    <section sx={{ mt: '2rem' }}>
      <SectionHeader heading={'Contact Us'} />
      <div
        className="content"
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: '3rem',
          gap: '2rem',
          flexWrap: 'wrap',
        }}
      >
        <div
          sx={{
            flex: ['1 0 100%', null, null, '1 0 calc(30% - 1rem)'],
            maxWidth: ['100%', null, null, 'calc(30% - 1rem)'],
            px: '1rem',
          }}
        >
          <div sx={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
            <FaMapMarkerAlt sx={{ minWidth: '1em' }} />
            <div>
              <h3
                sx={{
                  fontWeight: 500,
                  fontSize: '20px',
                  lineHeight: '30px',
                  color: '#666666',
                }}
              >
                National Embryo Donation Center
              </h3>
              <a
                sx={{
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: '#8BBFBD',
                }}
                href="http://maps.google.com/?q=11126+Kingston+Pike+Knoxville%2C+TN+37934"
              >
                11126 Kingston PikeKnoxville, TN 37934
              </a>
            </div>
          </div>

          <div sx={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
            <FaPhone sx={{ minWidth: '1em' }} />
            <div>
              <h4
                sx={{
                  fontWeight: 500,
                  fontSize: '20px',
                  lineHeight: '30px',
                  color: '#666666',
                }}
              >
                Phone
              </h4>
              <a
                sx={{
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: '#8BBFBD',
                }}
                href="/"
              >
                +865-777-2013
              </a>
              <div>
                <p
                  sx={{
                    ontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: '#666666',
                  }}
                >
                  Toll-Free:
                </p>
                <a
                  sx={{
                    ontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: '#8BBFBD',
                  }}
                  href="/"
                >
                  8666-585-8549
                </a>
              </div>
              <div>
                <p
                  sx={{
                    ontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: '#666666',
                  }}
                >
                  Fax:
                </p>
                <a
                  sx={{
                    ontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: '#8BBFBD',
                  }}
                  href="/"
                >
                  865-777-2016
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          sx={{
            flex: ['1 0 100%', null, null, '1 0 calc(70% - 1rem)'],
            maxWidth: ['100%', null, null, 'calc(70% - 1rem)'],
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3232.4996732334057!2d-84.15250378473559!3d35.88577608014727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885c2ee6ea52e5f3%3A0x4a1daddb8b3077dc!2s11126%20Kingston%20Pike%2C%20Farragut%2C%20TN%2037934%2C%20USA!5e0!3m2!1sen!2sin!4v1658330046082!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            title="location"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Address;
