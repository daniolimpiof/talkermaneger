const PATH_FILE = './talker.json';
const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const { readContentFile, writeContentFile } = require('./utils');
// Validações:
const { isValidEmail } = require('./middlewares/isValidEmail');
const { isValidPassword } = require('./middlewares/isValidPassword');
const { isValidToken } = require('./middlewares/isValidTolken');
const { isValidName } = require('./middlewares/isValidName');
const { isValidAge } = require('./middlewares/isValidAge');
const { isValidTalk } = require('./middlewares/isValidTalk');
const { isValidWatchedAt } = require('./middlewares/isValidWatchedAt');
const { isValidRate } = require('./middlewares/isValidRate');

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
  return res.status(200).json(talkers);
 // console.log('Req 1: GET /talker');
});

// 2 - Crie o endpoint GET /talker/:id
app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const talker = await readContentFile(PATH_FILE);
  const talkerInfo = talker.find((idNumb) => idNumb.id === Number(id));
  if (!talkerInfo) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });

  return res.status(200).json(talkerInfo);
});

// 3 - Crie o endpoint POST /login
// 4 - Adicione as validações para o endpoint /login
app.post('/login', isValidEmail, isValidPassword, (_req, res) => {
  const token = crypto.randomBytes(8).toString('hex');
  console.log(isValidEmail);
  return res.status(200).json({ token });
});

// 5 - Crie o endpoint POST /talker
// Recebi ajuda de Pedro Vieira Lopes para fazer o push corretamente, pois estava duplicando a info.
app.post(
  '/talker',
  isValidToken,
  isValidName,
  isValidAge,
  isValidTalk,
  isValidWatchedAt,
  isValidRate,
  async (req, res) => {
    const { name, age, talk } = req.body;
    const talkers = await readContentFile(PATH_FILE);
    const newTalker = { id: talkers.length + 1, name, age, talk };
    // console.log(talkers);
    talkers.push(newTalker);
  writeContentFile(PATH_FILE, newTalker);
  return res.status(201).json(newTalker);
  },
);

// 6 - Crie o endpoint PUT /talker/:id
app.put(
  '/talker/:id', 
  isValidToken,
  isValidName,
  isValidAge,
  isValidTalk,
  isValidWatchedAt,
  isValidRate,
  async (req, res) => {
    const { id } = req.params;
    const { name, age, talk } = req.body;
    const talkers = await readContentFile(PATH_FILE);
    const talkerIndex = talkers.findIndex((index) => Number(index.id) === Number(id));
    const upDateTalker = { id: Number(id), name, age, talk };
    talkers[talkerIndex] = upDateTalker;
    await writeContentFile(PATH_FILE, upDateTalker);
    // console.log(talk);
    // console.log(talkers);
   return res.status(200).json(upDateTalker);
  },
);