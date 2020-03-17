const router = require('express').Router();
const fs = require('fs');
const path = './assets/content.txt';

router.get('/content', (req, res) => {
    fs.readFile(path, 'utf8', (error, data) => {
        if (!error) {
            res.send(data.toUpperCase());
        } else {
            res.send('error while reading a file');
        }
    });
});

router.get('/updateTime', (req, res) => {
    res.send(readLastModifyTime());
});

const readLastModifyTime: () => Date = () => {
    const stats = fs.statSync(path);
    return stats.mtime as Date;
}

module.exports = router;