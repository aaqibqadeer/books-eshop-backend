import express from 'express'
import mainApp from './app'

const app = express()
const PORT = 3001

app.use(mainApp)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
