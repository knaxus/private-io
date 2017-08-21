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
const onlineUsers = [];

/**
 * use the public path for static files
 */
app.use(express.static(publicPath));

io.on('connect', (socket) => {
  console.log('new connection');

  socket.on('NewUser', (username) => {
    onlineUsers.push(username);
    console.log(onlineUsers);
  });

  socket.on('disconnect', (socket) => {
    console.log('Connection ended');
  });
});



server.listen(port, () => {
  console.log('running at : http://localhost:' + port);
});