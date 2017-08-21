const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');
const socketIO = require('socket.io');
const moment = require('moment');

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const hashMap = [];

/**
 * use the public path for static files
 */
app.use(express.static(publicPath));

io.on('connect', (socket) => {
  console.log('new connection');

  socket.emit('UserData', hashMap);

  socket.on('NewUser', (username) => {
    // push the socket id and username in the Hash
    hashMap.push({username: username.username, id: socket.id});
    console.log(hashMap);
    // io.emit so that each connected user can see the updated user
    io.emit('NewUserList', {list: hashMap});
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
  });

  socket.on('disconnect', () => {
    // filter out the username from the hash map and emit 'NewUserList' 
    // to update the state in react client  side
    const newUsers = hashMap.filter((set) => set.id !== socket.id);
    io.emit('NewUserList', {list: newUsers});    
    console.log('Connection ended', socket.id);
    console.log(newUsers);
  });
});



server.listen(port, () => {
  console.log('running at : http://localhost:' + port);
});