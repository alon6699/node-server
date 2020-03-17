const express = require("express");
const app = express();
const PORT = 3000;

app.get('/content', (req, res) => {
    res.send('content');
});

app.get('/updateTime', (req, res) => {
    res.send('updateTime');
});

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
  });