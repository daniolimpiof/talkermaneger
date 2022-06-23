const isValidToken = (req, res, next) => {
  // A requisição deve ter o token de autenticação nos headers, no campo authorization.
    const token = req.headers.authorization;
  // Caso o token não seja encontrado
    if (!token) {
      return res.status(401).json({ message: 'Token não encontrado' });
    }
    // token inválido
    if (token.length !== 16) {
      return res.status(401).json({ message: 'Token inválido' });
    }
  
    next();
  };
  
  module.exports = { isValidToken };