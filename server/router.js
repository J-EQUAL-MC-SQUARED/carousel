const router = require('express').Router();
const controller = require('./controller');

router.get('/carousels/:id', controller.getRelated);

module.exports = router;
