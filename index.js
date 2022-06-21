const PATH_FILE = './talker.json';
const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const { readContentFile } = require('./utils');
// Validações:
const { isValidPassword } = require('./middlewares/isValidPassword');
const { isValidEmail } = require('./middlewares/isValidEmail');

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

// 1 - Crie o endpoint GET /talker
app.get('/talker', async (_req, res) => {
  const talkers = await readContentFile(PATH_FILE);
  res.status(200).json(talkers);
 // console.log('Req 1: GET /talker');
});

// 2 - Crie o endpoint GET /talker/:id
app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const talker = await readContentFile(PATH_FILE);
  const talkerInfo = talker.find((idNumb) => idNumb.id === Number(id));
  if (!talkerInfo) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });

  res.status(200).json(talkerInfo);
});

// 3 - Crie o endpoint POST /login
// 4 - Adicione as validações para o endpoint /login
app.post('/login', isValidEmail, isValidPassword, (_req, res) => {
  const token = crypto.randomBytes(8).toString('hex');
  res.status(200).json({ token });
});