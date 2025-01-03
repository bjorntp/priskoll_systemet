//importing modules
const express = require('express')
const { getApk, getPriceChangesLower, getPriceChangesRaise } = require('../controllers/fetchDbData')
const router = express.Router()

router.get('/apk', getApk);
router.get('/lowered', getPriceChangesLower)
router.get('/raised', getPriceChangesRaise)

module.exports = router;
