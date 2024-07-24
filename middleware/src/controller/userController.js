const serviceCreateUser = require('../service/userService');

module.exports = class UserController {

    async handleService(req, res) {

        const { name, email } = req.body;

        const service = await new serviceCreateUser().newUser(
            {
                name: name,
                email: email
            }
        );

        res.status(200).json(service);
    }

    async getAllUsers(req, res) {
        const service = await new serviceCreateUser().getAllUser();
        res.json(service);
    }
}