const roles = require("../../enum/role");
const adminPolicy = require("./adminPolicy");
const userPolicy = require("./userPolicy");

const opts = {
    [roles.ADMIN] : {can : adminPolicy},
    [roles.USER] : {can : userPolicy}
}

module.exports = opts;