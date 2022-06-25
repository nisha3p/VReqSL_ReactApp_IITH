const async = require("hbs/lib/async")
const jwt = require("jsonwebtoken")
const User = require("../userSchema")
const authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.jwttoken;
        const verifyToken = jwt.verify(token, process.env.SECRET)
        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token });
        if (!rootUser) {
            throw new Error('User not found')
        }
        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;
        next();
    } catch (err) {
        res.status(401).send('Unauthorised: No tokens provided');
        console.log(err)
    }
}
module.exports = authenticate