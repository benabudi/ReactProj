const jwt = require('jsonwebtoken')

const createToken = data =>{
    return new Promise((res,rej)=>{
        jwt.sign(data, "324rf2c43vt435v63453bu36m7n59498,0m578nb4vc432xy", {expiresIn: '7d'}, (err,token)=>{
            if(err) rej(err)
            else res(token)
        })
    })
}

const verifyToken = token=>{
    return new Promise((res,rej)=>{
        jwt.verify(token, "324rf2c43vt435v63453bu36m7n59498,0m578nb4vc432xy", (err,decoded)=>{
            if(err) rej(err)
            else res(decoded)
        } )
    })
}

module.exports={
    createToken,
    verifyToken
}