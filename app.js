require('./db/connect')
const express = require('express')
const app = express();

const tasks = require('./routes/tasks')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

// 1. Routes

app.use(express.static('./public'))
app.use(express.json())

app.get('/first',(req,res)=>{
    res.send('Task Manager')
})

app.use('/api/v2/tasks',tasks)

app.use(notFound)
app.use(errorHandlerMiddleware)


const port = 3000

app.listen(port,console.log(`server is listening on port ${port}...`))
