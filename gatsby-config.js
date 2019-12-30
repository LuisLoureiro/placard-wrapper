module.exports = {
  plugins: [
    /*
     * Gatsby's data processing layer begins with “source” plugins. Here we
     * setup the site to pull data from the "documents" collection in a local
     * MongoDB instance
     */
    {
      resolve: 'gatsby-source-mongodb',
      options: {
        dbName: process.env.MONGODB_NAME,
        server: {
          address: process.env.MONGODB_ADDRESS,
          port: process.env.MONGODB_PORT
        },
        auth: {
          user: process.env.MONGODB_USER,
          password: process.env.MONGODB_PASS
        },
        collection: ['sportsAndCountries', 'events'],
        clientOptions: { useUnifiedTopology: true }
      }
    },
    {
      resolve: 'gatsby-plugin-stylus'
    }
  ]
}
