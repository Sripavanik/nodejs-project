const jwt=require('jsonwebtoken')
const authenticate=(req,rex,next)=>{
    try{
        const token=req.headers.authorization.split('')[1]
        const decode=jwt.verify(token,'A(P')
        req.user=decode
        next()

    }
    catch(error){
        res.json({
            message:"Authentication Failed!"
        })
    }
}
module.exports=authenticate