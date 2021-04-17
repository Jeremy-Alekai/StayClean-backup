const express = require('express')

const router = express.Router();

router.get('/', (req, res) => {
    res.render('saleReport', { title: 'Report Chart' });
})

router.post('/', (req, res) => {
    res.render('saleReport', { title: 'Report Chart' });
})

module.exports = router;