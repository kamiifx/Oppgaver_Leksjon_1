

const sendToken = (user,res) => {
    const token = user.getJwtToken();

    const option ={
        expires: new Date(Date.now() + '2d'),
        httpOnly: true,
        sameSite:true
    };
    option.secure = true;

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