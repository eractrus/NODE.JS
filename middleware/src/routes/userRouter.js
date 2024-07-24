const express = require('express');
const router = express.Router();

//Middleware
const verifyData = require('../middleware/dataVerufy');

//importações
const newUserController = require('../controller/userController');

router.get('/', new newUserController().getAllUsers);
router.post('/', verifyData, new newUserController().handleService);

module.exports = router;