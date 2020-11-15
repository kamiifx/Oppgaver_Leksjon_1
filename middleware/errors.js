const ErrorHandler = require('../utils/errorHandler.js');


module.exports =  errorMid = (err,req,res,next) => {
    let error = {...err};


    if (err.name === 'CastError'){
        const message = `Finner ikke ressursen du ser etter. Invalid ${err.path}`;
        error = new ErrorHandler(message,400);
    }

    if (err.name === 'ValidationError'){
        console.log(err.errors);
        const message = Object.values(err.errors).map(value => value.message);
        error = new ErrorHandler(message, 400)
    }

    res.status(error.statusCode).json({
        success:false,
        message: error.message || 'Internal Server Error'
    });
}
