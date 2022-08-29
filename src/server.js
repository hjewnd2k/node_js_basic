import express from 'express'
import configViewEngine from './configs/viewEngine'
import initWebRoute from './routes/web'

require('dotenv').config()

const app = express()
const port = process.env.PORT || 8080

// set up views engine
configViewEngine(app)

// set up routes
initWebRoute(app)

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.listen(port, (req, res) => {
    console.log(`Server listening on ${port}`);
})