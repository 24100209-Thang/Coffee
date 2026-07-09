const bcrypt = require('bcrypt');
const userRepository = require('../repositories/user.repository');

class AuthService {

    async register(username, password, role){
        const existingUser = await userRepository.findByUsername(username);
        if(existingUser) throw new Error("Username da ton tai");

        const passwordHash = await bcrypt.hash(password, 10);
        const userId = await userRepository.createUser(username, passwordHash, 'customer');

        return {userId, username, role};
    }
}

module.exports = new AuthService();