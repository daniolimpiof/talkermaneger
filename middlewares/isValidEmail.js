const isValidEmail = (req, res, next) => {
    const { email } = req.body;
  
    if (!email) {
        res.status(400).json({ message: 'O campo "email" é obrigatório' });
    }
    if (!email.includes('@') || !email.includes('.com')) {
        res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
    }
    next();
};

  module.exports = { isValidEmail };