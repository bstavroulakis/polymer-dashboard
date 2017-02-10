import express from 'express'
import compression from 'compression'
import { cacheControl } from './middleware'

const app = express()
app.use(compression())
app.use('/public', express.static('build/public', { maxAge: '365d' }))
app.use(cacheControl())

export default app