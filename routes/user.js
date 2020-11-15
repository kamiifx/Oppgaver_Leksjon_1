const express = require('express');
const {userController} = require('../controllers/index.js');


const router = express.Router();

router.get('/:id',userController.get);
router.get('/', userController.list);
router.post('/',userController.create);
router.delete('/:id',userController.remove);
router.get('/:id/events', userController.listEvents)

module.exports = router;