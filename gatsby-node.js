const path = require('path');

/**
 *  adding import alias for most used modules
 */

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
      },
    },
  });
};

// These templates are only data-fetching wrappers that import components

const postTemplate = require.resolve('./src/templates/post-query.js');

// const categoryTemplate = require.resolve('./src/templates/category-query.js');

exports.createPages = async ({ graphql, actions, store, reporter }, { spaceId }) => {
  const { createPage } = actions;

  const categories = await graphql(`
    query CategoriesQuery {
      allDegaCategory {
        nodes {
          degaId
          slug
        }
      }
    }
  `);

  const posts = await graphql(`
    query PostsQuery {
      allDegaPost {
        nodes {
          degaId
          published_date
          slug
        }
      }
    }
  `);

  // create post details page

  posts.data.allDegaPost.nodes.forEach((post) => {
    if (post.published_date) {
      createPage({
        path: `/stories/${post.slug}`,
        component: postTemplate,
        context: {
          id: post.degaId,
          slug: post.slug,
        },
      });
    }
  });
};
