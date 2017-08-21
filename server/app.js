import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import http from 'http';
import socketIO from 'socket.io';
import moment from 'moment';

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const onlineUsers = [];
const hashMap = [];

/**
 * use the public path for static files
 */
app.use(express.static(publicPath));

io.on('connect', (socket) => {
  console.log('new connection');

  socket.emit('UserData', onlineUsers);

  socket.on('NewUser', (username) => {
    onlineUsers.push(username);
    // push the socket id and username in the Hash
    hashMap.push({username: username.username, id: socket.id});
    console.log(onlineUsers);
    console.log(hashMap);
    // io.emit so that each connected user can see the updated user
    io.emit('NewUserList', {list: onlineUsers});
  });

  socket.on('MessageCreated', (thread) => {
    // take the thread add timestamp to it and emit it  back
    thread.createdAt = moment(new Date).toString();
    /**
     * Find the socket id of the user for whom the message is sent
     * get teh username from the thread.to
     * then send that message bothe to the sender and the receiver 
     */

    // find the socketid 
    const itemFromHashMap = hashMap.find((set) => {
      console.log(set);
      console.log(thread.to);
      return set.username === thread.to;
    });

    console.log(itemFromHashMap);

    const socketId = itemFromHashMap.id;
    console.log('Socket is: ', socketId);

    // sending to individual socketid
    socket.broadcast.to(socketId).emit('NewMessage', thread);
    
    // send to the sender 
    socket.emit('NewMessage', thread);
    console.log(thread);
  })

  socket.on('disconnect', (socket) => {
    console.log('Connection ended');
  });
});



server.listen(port, () => {
  console.log('running at : http://localhost:' + port);
});