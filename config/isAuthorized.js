const jwt = require("jsonwebtoken");
const rbac = require("../rbac/rbac");

module.exports = (endPoint) => {
    return async (req, res, next) => {
        try {
            if (req.headers.authorization) {
                let bareToken = req.headers.authorization;
                let token = bareToken.split(" ")[1];
                var decoded = jwt.verify(token, "sherif");
                const isAllowed = await rbac.can(decoded.role, endPoint);
                req.user = decoded;
                if (isAllowed) {
                    next();
                }
                else {
                    res.json({ status:401 ,message: "unauthorized" });
                }
            }
            else if (!req.headers.authorization) {
                res.json({status:401,  message: "unauthorized" });
            }
        } catch (error) {
            if(error.message == "invalid signature"){
                res.json({status:401,  message: "unauthorized" });
            }
            else{
                res.json({status:500,  message: "Something went wrong" , error});
            }
        }

    }
}