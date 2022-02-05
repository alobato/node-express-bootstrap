import express from 'express'
import logger from '../utils/logger.js'
import models from '../models/index.js'

const router = express.Router()

router.get('/now', async (_, res) => {
  logger.debug('now')
  const count = await models.User.countDocuments({ isDeleted: false })
  // eslint-disable-next-line no-console
  console.log('count', count)
  return res.send({ now: new Date().toISOString() })
})

export default router
