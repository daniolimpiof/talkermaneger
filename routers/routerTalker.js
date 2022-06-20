const router = require('express').Router();
const { getAllTalkers } = require('../middlewares/talkers');

router.post(
    '/talker',
    getAllTalkers,
    (req, res) => {
        res.status(200).json({ talkersInfo: req.body.talkersInfo });
    },       
);
module.exports = router;
