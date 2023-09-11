const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
// const ensureLoggedIn = require('../../config/ensureLoggedIn');

// Routes Here
router.post('/', usersCtrl.create);

module.exports = router;