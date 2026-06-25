const { pool } = require('../config/database');

class UserRepository {

    async createUser(username, passwordHash, role) {
        const [result] = await pool.execute(
            `
            INSERT INTO User
            (Username, PasswordHash, Role)
            VALUES (?, ?, ?)
            `,
            [username, passwordHash, role]
        );

        return result.insertId;
    }

    async findByUsername(username) {
        const [rows] = await pool.execute(
            `
            SELECT *
            FROM User
            WHERE Username = ?
            `,
            [username]
        );

        return rows[0];
    }
}

module.exports = new UserRepository();