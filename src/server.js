import express from 'express'
import configViewEngine from './configs/viewEngine'
require('dotenv').config()

const app = express()
const port = process.env.PORT || 8080

configViewEngine(app)

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.listen(port, (req, res) => {
    console.log(`Server listening on ${port}`);
})