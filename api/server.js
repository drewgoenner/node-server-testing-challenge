const express = require('express');

const Comics = require('../comics/comicsModel.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up'});
})

server.get('/comics', (req, res) => {
    Comics.getAll()
      .then(comics => {
          res.status(200).json(rows);
      })
      .catch(err => {
          res.status(500).json(err);
      });
});

module.exports = server;