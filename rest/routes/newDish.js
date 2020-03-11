const express = require('express');

const router = express.Router();

router.get('/newdish', (req,res) => {

    res.render('newdish')
})

router.post('/newdish', (req, res) => {

    db.query('SELECT * FROM restraurants')
    .then((results)
})

module.exports = router;