const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: `Blixy почистване - честно и чисто!`,
    description: `Blixy почистване - честно и чисто!`,
    author: `@valcho`,
  },
  plugins: [
    `gatsby-theme-gallery`,
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Blixy Почистване`,
        short_name: `Blixy`,
        start_url: `/`,
        background_color: fullConfig.theme.colors.white,
        theme_color: fullConfig.theme.colors.teal["400"],
        display: `minimal-ui`,
        icon: `src/images/tailwind-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production`
            ? [require(`cssnano`)]
            : []),
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
};
