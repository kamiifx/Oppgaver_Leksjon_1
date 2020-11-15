const express = require('express');
const userRoutes = require('./routes/user.js');
const pollRoutes = require('./routes/poll.js');
const errorMiddleware = require('./middleware/errors.js')
const morgan = require('morgan');
const connectDatabase = require("./config/db.js")
const app = express();
app.use(express.json());

app.use(morgan('dev'));
app.use(errorMiddleware)

app.use("/api/users/",userRoutes);
app.use("/api/polls/",pollRoutes);


connectDatabase();
const PORT = process.env.PORT || 5000;
const server = app.listen(
    PORT,
    console.log(`Server running on port : ${PORT}`)
);

process.on('unhandledRejection',(err) =>{
    console.log(`Error: ${err.message}`);
    console.log('Shutting done server due to "unhandled Rejection"');
    server.close(() =>{
        process.exit(1);
    });
});