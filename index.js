const Koa = require('koa2');

const port = 8083;
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(port, function (err) {
  if(err) return;
  console.log(`listen for port ${port}`)
});

process.on('SIGINT', () => {
  console.info('SIGINT signal received.');

  // Stops the server from accepting new connections and finishes existing connections.
  server.close(function(err) {
    // if error, log and exit with error (1 code)
    if (err) {
      console.error(err)
      process.exit(1)
    }

    // close your database connection and exit with success (0 code)
    // for example with mongoose
    mongoose.connection.close(function () {
      console.log('Mongoose connection disconnected')
      process.exit(0)
    })
  })
})
