import jwt from 'jsonwebtoken'
export const generateToken = (userId ) => {
    if(!process.env.TOKEN_SECRET){
        throw new Error("token secret is not defined in the environment variables")
    }
    return jwt.sign({_id:userId}, process.env.TOKEN_SECRET)
}

export const verifyToken = (token , tokenSecret) => {
    const decoded  = jwt.verify(token , tokenSecret)
    if(!decoded){
        throw new Error("token verification failed")
    }
    return decoded._id
}