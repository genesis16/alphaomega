

module.exports = {
  siteMetadata: {
	title: 'Alpha + Omega digital',
	description: 'Melbourne freelance web and wordpress developer',
	keywords: 'Melbourne web developer, front end developer, digital marketer, social media marketer, gatsby js developer, Melbourne wordpress developer',
  },
  plugins: [
   `gatsby-transformer-sharp`,
    'gatsby-plugin-react-helmet', 'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '065w0ie15r5x',
        accessToken: 'TOYanXc7Xjar_G84o9i8W6hAbap5YsxAxJ0OOrUhnNw',
        host: 'cdn.contentful.com',
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      }
    },

    { 
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://thealphaandomega.us20.list-manage.com/subscribe/post?u=76cf21d34b66efc97f0ee8cd1&amp;id=dc638d0727',
      },
    },
  ],
}