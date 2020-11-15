
const sendToken = (user,res) => {
    const token = user.getJwtToken();

    const option ={
        expires:new Date(Date.now() + (7 * 24 * 3600 * 1000)) ,
        httpOnly: true,
        sameSite:true
    };


    res.status(200).cookie('token',token,option).json({
        success:true,
        token,
        user: {
            email: user.email
        },
    });
};

module.exports = {
    sendToken
}