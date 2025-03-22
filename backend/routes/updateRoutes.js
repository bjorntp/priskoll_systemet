//importing modules
import { Router } from 'express'
import updateBeers from '../jobs/updateBeers'
import { getWhite, getRed, getRestWine } from '../jobs/updateWines'
import updateSpirits from '../jobs/updateSpirits'
import readDataFromJSON from '../jobs/readFile'

const router = Router()

router.post('/beer', updateBeers)
router.post('/white', getWhite)
router.post('/red', getRed)
router.post('/rest', getRestWine)
router.post('/spirit', updateSpirits);
router.post('/old', readDataFromJSON);

export default router
