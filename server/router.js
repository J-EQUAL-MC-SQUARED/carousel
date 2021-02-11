const router = require('express').Router();
const controller = require('./controller');
const { cache } = require('./middleware/cache');

router.get('/carousels/:id', cache, controller.getRelated);

module.exports = router;
