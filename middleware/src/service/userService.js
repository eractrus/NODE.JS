const dbUser = require('../local/db/dbUser');

module.exports = class UserService {

    async newUser(dataUser) {

        if (!dataUser) {
            return
        }
        await dbUser.push(dataUser);
        return { Message: "Create account success !" }
    }

    async getAllUser() {
        return dbUser
    }
}