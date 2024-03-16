const express = require ('express');
const morgan = require ('morgan');
require('dotenv').config();
const db = require('./mongodb');
const studentRoute = require('./routes/studentRoute');

const app =express();
app.use(morgan('dev'));
app.use(express.json());
app.use('/api',studentRoute)

const PORT = process.env.PORT;

app.listen(4001,()=>{
    console.log("server is up and running in port 4001")
})