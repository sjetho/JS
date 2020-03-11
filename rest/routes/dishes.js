const express = require('express');

const router = express.Router();

router.get('/dishes', (req,res) => {

    db.query(SELECT * FROM rest)
        .then((results) => {
            res.render('dishes', )
        }

    res.render('dishes')
)

module.exports = router;