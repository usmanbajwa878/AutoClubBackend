const jwt =require('jsonwebtoken');

exports.verifyToken = async(req,res,next) =>{
    const token = req.header('auth-token');
    if(!token){
        return res.status(401).send('Access Denied');
    }
    try {
        const verified = jwt.verify(token,process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        return res.status(400).send('Invalid Token');
    }
}