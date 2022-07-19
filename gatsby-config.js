module.exports = {
  siteMetadata: {
    title: `NEDC`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    {
      resolve: `@fyrepenguin/gatsby-source-dega`,
      options: {
        spaceId: '16',
        accessToken: '$2a$10$Sn6EE19qfvmiSXn9q4y/vOZh.OB..rwOlJ6ePTuZ95xj/Btd15PoG',
        uri: 'https://dega-api.factly.in/query',
      },
    },
  ],
};
