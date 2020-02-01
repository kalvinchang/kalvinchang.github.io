require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `Kalvin Chang 張郁騰`,
    siteTitleAlt: `Kalvin Chang 張郁騰`,
    siteImage: '/kuma-512x512.png'
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `About`,
            slug: `/about`,
          },
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `Resume`,
            slug: `/resume`,
          },
          {
            title: `Projects`,
            slug: `/projects`,
          }
        ],
        externalLinks: [
          {
            name: `Instagram`,
            url: `https://instagram.com/kalvin_1204`,
          },
          {
            name: `Github`,
            url: `https://www.github.com/kalvinchang`,
          },
          {
            name: `Gmail`,
            url: `mailto:kalvinc@andrew.cmu.edu`,
          },
          {
            name: `Spotify`,
            url: `https://www.spotify.com/kalvin_1204`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
        short_name: `minimal-blog`,
        description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/kuma-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/kuma-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
