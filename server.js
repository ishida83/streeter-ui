const express = require('express');

const { heartbeat, callback, server } = require('./templates/logging');

const app = express();

app.use(express.static('dist'));

app.get('/diagnostic/heartbeat', (req, res) => {
  res.send(heartbeat);
});

app.get('/diagnostic/callback', (req, res) => {
  res.send(callback);
});

app.listen(process.env.PORT || 3000, () => {
  console.log(server);
});
