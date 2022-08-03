/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';
import Plyr from 'plyr-react';

const Header = ({ title, cta, ctaLink, description, image, video }) => {
  function youTubeGetID(url) {
    url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return url[2] !== undefined ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
  }

  const id = youTubeGetID(video);
  return (
    <header
      sx={{
        background: 'rgba(75, 147, 142, 0.9)',
      }}
    >
      <div
        sx={{
          maxWidth: '1400px',
          mx: 'auto',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          alignItems: 'center',
          py: ['2rem', '4rem'],
          px: ['1rem', null, '2rem'],
          height: '100%',
          minHeight: 550,
        }}
      >
        <div
          sx={{
            flex: ['1 0 100%', null, '1 0 calc(50% - 1rem)'],
            maxWidth: ['100%', null, 'calc(50% - 1rem)'],
            textAlign: ['center', null, 'left'],
          }}
        >
          <h1
            sx={{
              fontSize: ['1.75rem', null, '3.5rem'],
              lineHeight: 1.15,
              color: '#FFFFFF',
              mb: '24px',
            }}
          >
            {title}
          </h1>
          {description && (
            <p
              sx={{
                fontSize: ['1rem', null, '1.25rem'],
                lineHeight: '36px',
                letterSpacing: '0.09em',
                color: '#FFFFFF',
                my: '1rem',
                textTransform: 'uppercase',
              }}
            >
              {description}
            </p>
          )}
          {cta && (
            <Link
              to={ctaLink}
              sx={{
                display: 'inline-block',
                my: '1rem',
                fontSize: '16px',
                color: ' #FFFFFF',
                p: '1rem 1.5rem',
                background: ' #F7A496',
                border: '1px solid #F7A496',
                borderRadius: '5px',
                minWidth: '200px',
                textAlign: 'center',
                '&:hover': {
                  bg: 'transparent',
                },
              }}
            >
              {cta}
            </Link>
          )}
        </div>
        {(image || video) && (
          <div
            sx={{
              flex: ['1 0 100%', null, '1 0 calc(50% - 1rem)'],
              maxWidth: ['100%', null, 'calc(50% - 1rem)'],
            }}
          >
            {image ? (
              <img sx={{ width: '100%' }} src={image} alt="" />
            ) : (
              <>
                <Plyr
                  crossorigin
                  options={{
                    controls: [
                      'play-large',
                      'play',
                      'progress',
                      'current-time',
                      'mute',
                      'volume',
                      'captions',
                      'settings',
                      'pip',
                      'airplay',
                      'fullscreen',
                    ],
                  }}
                  source={{
                    type: 'video',
                    sources: [
                      {
                        src: id,
                        provider: 'youtube',
                      },
                    ],
                  }}
                />
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
