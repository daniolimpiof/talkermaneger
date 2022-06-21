const isValidPassword = (req, res, next) => {
    const { password } = req.body;
  
    if (!password.length >= 6) {
      return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
    }
    if (!password) {
        return res.status(400).json({ message: 'O campo "password" é obrigatório' });
      }
  
    next();
  };

  module.exports = { isValidPassword };