/* eslint-disable import/no-extraneous-dependencies */
const Hapi = require('@hapi/hapi');

const routes = require('./routes');

// eslint-disable-next-line no-unused-vars
const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });
  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};
init();
