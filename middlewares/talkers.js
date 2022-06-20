const getAllTalkers = (req, res, next) => {
    const { talkersInfo } = req.body;
    
    if (!talkersInfo) {
      return res.status(200).json([]);
    }  
    next();
  };
  module.exports = { getAllTalkers };
