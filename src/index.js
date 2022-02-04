import dotenv from 'dotenv'
import app from './app.js'

dotenv.config()

const PORT = process.env.PORT || 8000

const server = app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server ready at http://localhost:${PORT}`)
})

export { server }
