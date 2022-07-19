module.exports = {
  siteMetadata: {
    title: `National Embryo Donation Centre`,
    description: `The non-profit National Embryo Donation Center helps families using in vitro fertilization (IVF) manage their embryos and their options.`,
    siteUrl: `https://www.embryodonation.org/`,
    image: '/image/og-image.jpg',
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
