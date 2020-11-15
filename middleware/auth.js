const jwt = require('jsonwebtoken');
const userService = require('../services/user.js')
const ErrorHandler = require('../utils/errorHandler.js');
const catchAsyncErrors = require('./catchAsync.js');

const isAuthenticated = catchAsyncErrors(async (req,res,next) => {
    let token;
    if (req.cookies?.token){
        token = req.cookies.token;
    }
    if (!token){
        return next(new ErrorHandler("Logg inn",401));
    }

    const decoded = jwt.verify(token,'a3748c5ad8a8cc215d14296edf06ef2b47f7eec7e592910eea0b0b48bdd65820');
    const user = await userService.getUserById(decoded.id);
    req.user = user;
    next();
});

module.exports={
    isAuthenticated
}
