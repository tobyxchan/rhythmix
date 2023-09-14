const express = require('express');
const router = express.Router();
const recommendationsCtrl = require('../../controllers/api/recommendations');

router.get('/list', recommendationsCtrl.list);

module.exports = router;