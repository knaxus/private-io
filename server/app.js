import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import http from 'http';
import socketIO from 'socket.io';

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

/**
 * use the public path for static files
 */
app.use(express.static(publicPath));

server.listen(port, () => {
  console.log('running at : http://localhost:' + port);
});