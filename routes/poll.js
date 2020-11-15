const express = require('express');
const pollController = require('../controllers/poll.js');

const router = express.Router();

router.get(':id',pollController.get);
router.get('/',pollController.list);
router.post('/',pollController.create);

module.exports = router;
