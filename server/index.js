import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { dbConnection } from './db/database.js';


dotenv.config({ path: './config/config.env' });
const app = express();
const port = process.env.PORT || 2000;

const res = dbConnection()

// middlewares
app.use(cors({
    origin: [],
    method: [],
    credentials: true,
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// database connection.


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})

app.get('/', (req, res) => {
    res.send('WElcome to the app')
})

