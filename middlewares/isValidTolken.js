/* const isValidToken = (req, res, next) => {
    const token = req.headers.authorization;
    const tokenRegex = new RegExp(/^[a-zA-Z0-9]{16}$/);
  
    if (!tokenRegex.test(token)) {
      return res.status(401).json({ message: 'invalid token' });
    }
  
    next();
  };
  
  module.exports = { isValidToken }; */