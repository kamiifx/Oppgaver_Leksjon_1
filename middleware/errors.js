const ErrorHandler = require('../utils/errorHandler.js');


module.exports =  errorMid = (err,req,res,next) => {
    let error = {...err};
    error.message = err.message;

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
