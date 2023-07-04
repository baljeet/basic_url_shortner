const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.post('/shorten', controller.shortenUrl);
router.get('/:id', controller.redirectUrl);

module.exports = router;

