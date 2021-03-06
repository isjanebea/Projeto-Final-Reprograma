const bcrypt = require('bcrypt')


module.exports = {
    hashPassword(password, salt=7 /* is Default 7 */) {
         return bcrypt.hashSync(password, salt);
    },
}
