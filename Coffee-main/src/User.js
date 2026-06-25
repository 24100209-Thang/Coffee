class User {
    constructor(userID, username, passwordHash, role) {
        this.userID = userID;
        this.username = username;
        this.passwordHash = passwordHash;
        this.role = role;
    }
}

module.exports = User;