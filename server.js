const express = require('express');
const userRoutes = require('./routes/user.js');
const morgan = require('morgan');
const connectDatabase = require("./config/db.js")

const app = express();
app.use(express.json());

app.use(morgan('dev'));


app.use("/",userRoutes);



connectDatabase();
const PORT = process.env.PORT || 5000;
app.listen(PORT)
