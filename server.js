import express from 'express';
import { ServerMessage } from './templates/logging';

const app = express();

app.use(express.static('dist'));

app.get('/diagnostic', (req, res) => {
  res.send('OK');
});

app.listen(3000, () => {
  console.log(ServerMessage);
});
