const express = require('express');
const app = express();

const errorMiddleware = require('./middleware/error')

app.use(express.json())
const product = require('./routes/productRoute');
const user = require('./routes/userRoute');

app.use("/api/v1" , product);
app.use('/api/v1' , user);

app.use(errorMiddleware);

// var express = require('express');
var cors = require('cors');
// var app = express();
app.use(cors({credentials: true}));

module.exports = app;