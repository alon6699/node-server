import * as express from "express";

const app: express.Application = require('express')();
const PORT: number = 3000;

const routes = require('./routes/routes');
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});