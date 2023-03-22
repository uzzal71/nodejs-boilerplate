const app = require('./app'); // require the Express app
const http = require('http');

const port = process.env.PORT || 3000; // set the port

const server = http.createServer(app); // create the server

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});