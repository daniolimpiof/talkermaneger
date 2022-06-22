const isValidWatchedAt = (req, res, next) => {
    const { talk: { watchedAt } } = req.body; // especificar "rota" do watchedAt
    const regexDate = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/i;
    const validDate = regexDate.test(watchedAt);
  
    if (!watchedAt) {
      return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
    }
    if (!validDate) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
    }
    next();
  };

module.exports = { isValidWatchedAt };