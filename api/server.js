// build your server here and require it from index.js
const express = require("express");
const server = express();
const resourceRouter = require('./resource/router')
const projectRouter = require('./project/router')
const taskRouter = require('./task/router')

server.use(express.json());
server.use('/api/projects', projectRouter)
server.use('/api/tasks', taskRouter)
server.use('/api/resources', resourceRouter)

//Test endpoint
server.use('*', (req, res) => {
    res.json({ api: 'up'})
  })

//error handling mdlware
server.use((err, req, res, next) => {
    // eslint-disable-line
    res.status(500).json({
      message: err.message,
      stack: err.stack,
    });
  });
  
  module.exports = server;