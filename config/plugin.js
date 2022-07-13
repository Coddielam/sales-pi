module.exports = () => ({
  graphql: {
    enabled: true,
    config: {
      playgroundAlways: false,
      defaultLimit: 10,
      amountLimit: 50, // default 100
      maxLimit: 20,
      apolloServer: {
        tracing: true, // tracking response time for each part of your query
      },
    },
  },
});
