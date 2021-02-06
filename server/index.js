require('newrelic');
const express = require('express');
const compression = require('compression');
const cors = require('cors');
const path = require('path');

// eslint-disable-next-line no-unused-vars
const db = require('../database');
const router = require('./router');

const PUBLIC_DIR = path.resolve(__dirname, '../public');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(PUBLIC_DIR));

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
