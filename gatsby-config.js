module.exports = {
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
