const express = require('express');
const path = require('path');

const STATIC_DIR = path.resolve('public');
const app = express();
const PORT = 3002;

app.use(express.static(STATIC_DIR));
app.use((req, res, next) => {
  console.log(`Incoming ${req.method} request from ${req.path}`);
  next();
});

// HTTP method handlers here

app.get('/api/products:id/images', (req, res) => {
  res.send('GET request');
});

app.listen(PORT, () => {
  console.log(`Express listening on port ${PORT}!`);
});
