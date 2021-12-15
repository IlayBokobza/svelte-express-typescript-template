import express from 'express'
import env from 'dotenv'
import mongoose from 'mongoose'
import chalk from 'chalk'
import path from 'path'
import cors from 'cors'

const app = express()
app.use(cors())
env.config({path:path.resolve('../.env')})

//connect to db
mongoose.connect(process.env.MONGO!,{dbName:"Superb-Bot"})
.then(() => console.log(chalk.bgGreen('Connected To Database')))
.catch((e) => {console.log(chalk.bgRed('Unable to connect to database'),'\n',e.message);process.exit()})

//TODO: remove test route
app.get('/api/hello',(req,res) => {
    res.send('Hello There!')
})

//serves app
const pathToDist = path.resolve(__dirname,'../dist')
app.use(express.static(pathToDist))
app.get(/.*/,(req,res)=>{
    res.sendFile(`${pathToDist}/index.html`)
})

//starts server
app.listen(process.env.PORT,() => console.log(chalk.bgGreen(`Server listening for requests on port ${process.env.PORT}`)))