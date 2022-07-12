const mongoose = require('mongoose')
require('dotenv').config()

mongoose
.connect(process.env.MONGO_URI,{
    useNewUrlParser : true,
    useCreateIndex : true,
    useFindAndModify : false,
    useUnifiedTopology : true
})
.then(()=> console.log('Connected to the database...'))
.catch((err)=> console.log(err))
