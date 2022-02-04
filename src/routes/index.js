import express from 'express'
import logger from '../utils/logger.js'

const router = express.Router()

router.get('/now', async (_, res) => {
  logger.debug('now')
  return res.send({ now: new Date().toISOString() })
})

export default router
