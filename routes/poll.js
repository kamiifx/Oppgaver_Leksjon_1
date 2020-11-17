const express = require('express');
const pollController = require('../controllers/poll.js');
const authMid = require('../middleware/auth.js')

const router = express.Router();

router.get('/:id',pollController.get);
router.get('/',pollController.list);
router.post('/',authMid.isAuthenticated,pollController.create);
router.delete('/:id',pollController.remove);
router.put('/:id',pollController.vote1);
router.put('/:id',pollController.vote2);


module.exports = router;
