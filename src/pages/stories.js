/** @jsx jsx */
import { graphql } from 'gatsby';
import * as React from 'react';
import Header from '../components/Common/Header';
import Layout from '../components/Layout/index';
import SectionHeader from '../components/Common/SectionHeader';
import BlogCard from '../components/Common/BlogCard';
import { jsx } from 'theme-ui';
import { SEO } from '../components/Seo';

const StoryPage = ({ data }) => {
  const { posts } = data;
  console.log({ posts });
  return (
    <Layout>
      <div>
        <SEO title="Stories | National Embryo Donation Center" />
        <Header title="Personal Stories" />
        <section className="content">
          <SectionHeader heading="Personal Stories" />
          <p>
            You can read all the medical information available. But sometimes you need to hear
            someone’s story to understand what will happen when you donate or adopt embryos. These
            embryo adoption stories give you insight into this very personal journey.
          </p>
        </section>
        <section sx={{ maxWidth: '1400px', mx: 'auto', px: '2rem' }}>
          {console.log({ posts })}
          <div sx={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {posts.nodes.map((post) => (
              <BlogCard key={post.id} data={post} />
            ))}
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
