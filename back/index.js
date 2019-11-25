const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const config = require('config');
const routes = require('./app/routes');

const ChatService = require('./app/services/chat.service');
ChatService.loadMessages();

const currentDate = new Date();
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const jwt = require('jsonwebtoken');

io.on('connection', function(socket) {
  console.log('a user connected');

  socket.on('message', (message) => {
    ChatService.newMessage(message);
    io.emit('message', message); 
  }); 
});

app.use(cors()); // éviter erreur cors
app.use(bodyparser.json()); // application en json
app.use(bodyparser.urlencoded({ extended: true }));

// Middleware 
app.use((req, res, next) => {
  // FORMAT OF TOKEN
  // Authorization: Bearer <access_token>
  // Get auth header value
  const bearerHeader = req.headers['authorization'];

  if (bearerHeader) {
    req.token = bearerHeader.replace(/^Bearer (.+)$/, '$1');
    const { sub: userId } = jwt.verify(req.token, config.get('jwt.secret'));
    const { sub: user } = jwt.verify(req.token, config.get('jwt.secret'));
    req.userId = userId;
    req.user = user;
    console.log('t es log noob ' + userId + ' - bearer : ' + bearerHeader);
  } else { 
    console.log('t es trop pas log noob ');
    req.token = null;
    req.userId = null;
    // return res.status(501).json({message: 'Auth Failed'});
  }
  next();
});

// Load routes
Object.values(routes)
    .forEach(item =>
        Object.values(item).forEach(route => route({ app }))); 

// Middleware
http.listen(3000, ()=> console.log( currentDate + ': Express server running at port #3000'));  

 
module.exports = app;