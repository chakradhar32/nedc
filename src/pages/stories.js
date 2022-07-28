/** @jsx jsx */
import { graphql } from 'gatsby';
import * as React from 'react';
import Header from '../components/Common/Header';
import Layout from '../components/Layout/index';
import SectionHeader from '../components/Common/SectionHeader';
import BlogCard from '../components/Common/BlogCard';
import { jsx } from 'theme-ui';
import { Seo } from '../components/Seo';


const StoryPage = ({ data }) => {
  const { posts } = data;
  return (
    <Layout>
      <Seo title="Stories | National Embryo Donation Center" />
      <div>
        <Header title="Personal Stories" cta="Adopt Embryos" ctaLink={'/adoption'} />
        <section>
          <div className="content">
            <SectionHeader heading="Personal Stories" icon='/images/personal stories@2x.png' />
            <p>
              You can read all the medical information available. But sometimes you need to hear
              someone’s story to understand what will happen when you donate or adopt embryos. These
              embryo adoption stories give you insight into this very personal journey.
            </p>
          </div>
        </section>
        <section>
          <div className="content">
            <div sx={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              {posts.nodes.map((post) => (
                <BlogCard key={post.id} data={post} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default StoryPage;

export const query = graphql`
  query StoriesPageQuery {
    posts: allDegaPost {
      nodes {
        users {
          id
          first_name
          last_name
        }
        categories {
          slug
          name
        }
        medium {
          alt_text
          url
          dimensions
        }
        published_date
        id
        status
        subtitle
        title
        slug
        excerpt
      }
    }
  }
`;
