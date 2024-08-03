const serviceCreateUser = require('../service/userService');
const bcrypt = require('bcrypt');

module.exports = class UserController {

    async handleService(req, res) {

        const { name, email, password } = req.body;

        const passwordHash = await bcrypt.hash(password, 8);

        const dataUser = {
            name: name,
            email: email,
            password: passwordHash
        }

        const service = await new serviceCreateUser().newUser(dataUser);

        res.status(200).json(service);
    }

    async getAllUsers(req, res) {
        const service = await new serviceCreateUser().getAllUser();
        res.json(service);
    }
}