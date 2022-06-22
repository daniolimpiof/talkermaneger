const isValidEmail = (req, res, next) => {
    const { email } = req.body;
    const emailRegex = /\S+@\S+.\S+/;
    const validEmail = emailRegex.test(email);
    
    if (!email) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });    
    }

    if (!validEmail) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
    }
    next();
};

  module.exports = { isValidEmail };
