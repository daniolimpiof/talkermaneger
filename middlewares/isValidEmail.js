const isValidEmail = (req, res, next) => {
    const { email } = req.body;
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
    const validEmail = emailRegex.test(email);
    
    if (!email) {
        res.status(400).json({ message: 'O campo "email" é obrigatório' });
    }
    if (!validEmail) {
        res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
    }
    next();
};

  module.exports = { isValidEmail };
