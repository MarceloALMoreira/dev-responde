const express = require('express');
const router = require('./router');

const app = express();

app.set('view engine', 'ejs')

app.use(express.json);

app.use(router);

module.exports = app;