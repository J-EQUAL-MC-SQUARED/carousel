require('newrelic');
require('dotenv').config();
const express = require('express');
const compression = require('compression');
const path = require('path');

// eslint-disable-next-line no-unused-vars
const db = require('../database');
const router = require('./router');

const PUBLIC_DIR = path.resolve(__dirname, '../public');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(compression());
app.use(express.static(PUBLIC_DIR));

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
