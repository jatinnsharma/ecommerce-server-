import express from 'express'
const app = express();
import config from './config/index.js'
import dbconnect from './db/index.js';
import cors from "cors"
import cookieParser from "cookie-parser"
const PORT = config.PORT

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(cookieParser())


app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})