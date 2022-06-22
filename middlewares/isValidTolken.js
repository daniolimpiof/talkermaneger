const isValidToken = (req, res, next) => {
  // A requisição deve ter o token de autenticação nos headers, no campo authorization.
    const token = req.headers.authorization;
    const tokenRegex = new RegExp(/^[a-zA-Z0-9]{16}$/);
  // Caso o token não seja encontrado
    if (!token) {
      return res.status(401).json({ message: 'Token não encontrado' });
    }
    // token inválido
    if (!tokenRegex.test(token)) {
      return res.status(401).json({ message: 'Token inválido' });
    }
  
    next();
  };
  
  module.exports = { isValidToken };