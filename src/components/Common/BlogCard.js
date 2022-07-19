/** @jsx jsx */
import * as React from 'react';
import { FaTwitter, FaFacebookF, FaEnvelope } from 'react-icons/fa';
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';
import { BsArrowUpRight } from 'react-icons/bs';

const BlogCard = ({ data }) => {
  return (
    <div
      sx={{
        maxWidth: '420px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Link to={`/stories/${data.slug}`}>
        <div>
          <img src={data.medium.url.proxy} alt="" />
        </div>
      </Link>
      <div sx={{ p: '1rem' }}>
        <h4
          sx={{
            fontWeight: 600,
            fontSize: '2rem',
            lineHeight: '30px',
            color: '#101828',
          }}
        >
          {data.subtitle}
        </h4>
        <p
          sx={{
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '24px',
            color: '#666666',
            my: '1rem',
          }}
        >
          {data.title}
        </p>
        <Link
          sx={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '1rem',
          }}
          to={`/stories/${data.slug}`}
        >
          Read Story <BsArrowUpRight size={12} />
        </Link>
        <div
          sx={{
            color: '#999999',
            display: 'flex',
            gap: '0.5rem',
            mt: '1rem',
            a: {
              color: 'inherit',
            },
            'a:hover': {
              color: '#61A19E',
            },
          }}
        >
          <a href="/">
            <FaTwitter />
          </a>
          <a href="/">
            {' '}
            <FaFacebookF />
          </a>
          <a href="/">
            {' '}
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
