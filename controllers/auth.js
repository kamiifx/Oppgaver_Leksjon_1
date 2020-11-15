const catchAsyncErrors = require('../middleware/catchAsync.js')
const ErrorHandler = require('../utils/errorHandler.js')
const token = require('../utils/jwtToken.js')
const {userService} = require('../services/index.js')

const register = catchAsyncErrors(async (req,res,next) => {

    const user = await userService.createUser(req.body);
    token.sendToken(user,res)
});

const login = catchAsyncErrors(async (req,res,next) => {
    const {email} = req.body;

    if (!email){
        return next(new ErrorHandler('Fyll ut epost og passord', 400))
    }

    const user = await userService.getUserByEmail({email},true)

    if (!user){
        return next(new ErrorHandler('Fyll ut epost og passord', 400))
    }

    token.sendToken(user,res)

});

const logout = catchAsyncErrors(async (req,res,next) => {
    res.cookie('token','none',{
        expires: new Date(Date.now()),
        httpOnly: true,
    });
    res.status(200).json({
        success:true,
        data: 'Logged out',
    });
});


module.exports = {
    register,login,logout
}