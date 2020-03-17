const router = require('express').Router();
const fs = require('fs');

router.get('/content', (req, res) => {
    fs.readFile('./assets/content.txt', 'utf8', (error, data) => {
        if (!error) {
            res.send(data.toUpperCase());
        } else {
            res.send('error while reading a file');
        }
    });
});

router.get('/updateTime', (req, res) => {
    res.send('updateTime');
});

module.exports = router;