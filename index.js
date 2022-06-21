const express = require('express');
const bodyParser = require('body-parser');
const { readContentFile } = require('./utils');

const PATH_FILE = './talker.json';

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

// requisição GET para /talker
app.get('/talker', async (_req, res) => {
  const talkers = await readContentFile(PATH_FILE);
  res.status(200).json(talkers);
 // console.log('Req 1: GET /talker');
});
