/** @jsx jsx */
import { jsx } from 'theme-ui';

import {
  FaTwitter,
  FaFacebookF,
  FaPodcast,
  FaYoutube,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
} from 'react-icons/fa';
const Footer = () => {
  return (
    <footer
      sx={{
        bg: '#8BBFBD',
        //height: '500px'
      }}
    >
      <div
        sx={{
          maxWidth: '1400px',
          mx: 'auto',
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          padding: '4rem 2rem',
        }}
      >
        <div>
          <h3
            sx={{
              color: '#FFFFFF',
              fontSize: '32px',
              fontStyle: 'normal',
            }}
          >
            NEDC
          </h3>
          {/* <p
            sx={{
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '24px',
              color: '#FFFFFF',
            }}
          >
            This material was made possible by grant #EAAPA131021-01-01 from the U.S. Department of
            Health and Human Services. The statements expressed are those of the grantee
            organization and do not necessarily represent the views of the Department.
          </p> */}
        </div>

        <div>
          <p
            sx={{
              fontWeight: 400,
              fontSize: '1rem',
              color: '#FFFFFF',
              display: 'flex',
              gap: '0.5rem',
              alignItems: 'baseline',
              svg: {
                fontSize: '0.75em',
              },
            }}
          >
            <FaMapMarkerAlt /> National Embryo Donation Center,
            <br /> 11126 Kingston Pike Knoxville,
            <br /> TN 37934.
          </p>
        </div>
        <div sx={{ maxWidth: '400px' }}>
          <p
            sx={{
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '1rem',
              color: '#FFFFFF',
              display: 'flex',
              gap: '0.5rem',
              alignItems: 'flex-start',
            }}
          >
            <FaPhone /> Phone:866-585-8549, <br />
            Fax: 866-585-8549, <br />
            Toll-Free: 866-585-8549.
          </p>
        </div>
      </div>
      <div sx={{ bg: '#629b98', px: '2rem' }}>
        <div
          sx={{
            display: 'flex',
            alignItems: 'center',
            margin: '0 auto',
            maxWidth: '1400px',
            justifyContent: 'space-between',
          }}
        >
          <p
            sx={{
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '14px',
              py: '0.5rem',
              lineHeight: '24px',
              color: '#FFFFFF',
            }}
          >
            © 2022 National Embryo Donation Center. Privacy Policy. All rights reserved.
          </p>
          <div
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'end',
              gap: '0.75rem',
              maxWidth: '1400px',
              px: '2rem',
              height: '50px',
              a: {
                color: '#fff',

                '&:hover': {
                  color: '#F7A496',
                },
              },
            }}
          >
            <a
              href="http://www.twitter.com/embryodonation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="http://www.facebook.com/embryodonation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="http://www.youtube.com/NEDCKnoxville"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.instagram.com/nedcknoxtn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.podomatic.com/podcasts/mmellinger"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPodcast />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
