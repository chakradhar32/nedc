/** @jsx jsx */
import React from 'react';
import parseEditorJsData from '../../helpers/parseEditorJsData';
import { jsx } from 'theme-ui';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'gatsby';
import parseDate from '../../helpers/parseDate';
import { FaTwitter, FaFacebookF, FaEnvelope } from 'react-icons/fa';

const Post = ({ data, nextPost, previousPost }) => {
  return (
    <main sx={{ maxWidth: '900px', mx: 'auto' }}>
      <div>
        <h4 sx={{ fontSize: '1.25rem', py: '2rem' }}>
          {data.subtitle} | <span>{parseDate(data.published_date)}</span>
        </h4>
      </div>

      <div>
        <img src={data.medium.url.proxy} alt="" />
      </div>
      <h1 sx={{ fontSize: ['2rem', null, '2.5rem', '3rem'], my: '2rem' }}>{data.title}</h1>
      <div className="parsed">
        {parseEditorJsData({ content: data.description, scripts: true })}
      </div>
      <div sx={{ mt: '2rem', mb: '1.5rem' }}>
        <h3 sx={{ fontSize: '1.125rem', mb: '1rem' }}>For More Information</h3>
        <p>
          <a href="https://app.embryodonation.org/">Click here</a>&nbsp;to apply to adopt embryos.
          For more info on embryo adoption,&nbsp;
          <a href="https://www.embryodonation.org/adoption/">click here.</a>&nbsp;For more info on
          embryo donation,&nbsp;<a href="https://www.embryodonation.org/donation/">click here.</a>
        </p>
      </div>
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
          {' '}
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

      <div>
        <div
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            pb: '1.5rem',
            borderBottomWidth: '1px',
          }}
        >
          <div
            sx={{
              flex: [null, null, '0 0 50%'],
              maxWidth: [null, null, '50%'],
              p: '1.5rem',
              textAlign: 'left',
            }}
          >
            {previousPost && (
              <>
                <Link
                  to={`/stories/${previousPost.slug}`}
                  sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
                >
                  <span>
                    <FaChevronLeft />
                  </span>
                  <div>
                    <span sx={{ fontSize: '0.75rem', textTransform: 'uppercase' }}>
                      Previous Post
                    </span>
                    <h3>{previousPost.title}</h3>
                  </div>
                </Link>
              </>
            )}
          </div>
          <div
            sx={{
              flex: [null, null, '0 0 50%'],
              maxWidth: [null, null, '50%'],
              ml: 'auto',
              p: '1.5rem',
              textAlign: 'right',
            }}
          >
            {nextPost && (
              <>
                <Link
                  to={`/stories/${nextPost.slug}`}
                  sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
                >
                  <div>
                    <span sx={{ fontSize: '0.75rem', textTransform: 'uppercase' }}>Next Post</span>
                    <h3>{nextPost.title}</h3>
                  </div>
                  <span>
                    <FaChevronRight />
                  </span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Post;
