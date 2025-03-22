//importing modules
import { Router } from 'express';
const { getApk, getPriceChangesLower, getPriceChangesRaise, getDates } = require('../controllers/fetchDbData').default.default
const router = Router()

router.get('/apk', getApk);
router.get('/lowered', getPriceChangesLower)
router.get('/raised', getPriceChangesRaise)
router.get('/dates', getDates)

export default router;
