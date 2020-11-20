const jwt = require("jsonwebtoken");

exports.requireSignin = (req, res, next) => {
    console.log('header: ' + req.headers.authorization)
    if(!req.headers.authorization) {
      return res.status(400).json({message: 'Autherization token is required!'})
    }
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
  
  
  }