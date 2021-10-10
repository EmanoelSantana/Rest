const express = require('express');
const router = express.Router();
const Auth = require('../controllers/AuthController');

router.get('/', Auth, (req, res) => {
    if (req.user.admin) {
        res.send('Esse dado só pode ser visto por Admins');
    } else {
        res.status(401).send('Access Denied');
    }
});

module.exports = router;


