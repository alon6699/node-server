const router = require('express').Router();
const fs = require('fs');
const { promisify } = require('util');
const stat = promisify(fs.stat);

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
    readLastModifyTime().then(data => res.send(data)).catch(() => res.send('Error in reading the file statuses'));
});

async function readLastModifyTime(): Promise<Date> {

    const stats = await stat(path);
    return stats.mtime as Date;
}

module.exports = router;