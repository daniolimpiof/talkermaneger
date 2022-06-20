const express = require('express');
const bodyParser = require('body-parser');
const talkerRouter = require('./routers/routerTalker');

const app = express();
app.use(bodyParser.json());
app.use('/talker', talkerRouter);

const HTTP_OK_STATUS = 200;
const PORT = '3002';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online!');
});
