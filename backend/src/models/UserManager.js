const bcrypt = require("bcrypt");
const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  async create(user) {
    return UserManager.hashPassword(user.password).then(async (hash) => {
      const [rows] = await this.database.query(
        `INSERT INTO ${this.table} (name, email, password) VALUES (?, ?, ?)`,
        [user.name, user.email, hash]
      );
      return rows;
    });
  }

  async login(user) {
    const { email, password } = user;
    const [rows] = await this.database.query(
      `SELECT * FROM customers WHERE email LIKE ?`,
      [email]
    );

    if (!rows.length) {
      return undefined;
    }

    const dbUser = rows[0];

    const result = await bcrypt.compare(password, dbUser.password);
    // console.log(result);

    return result ? dbUser : undefined;
  }

  getProfile(id) {
    return this.database.query(`SELECT * FROM user WHERE id = ?;`, [id]);
  }

  static hashPassword(password, workFactor = 5) {
    return bcrypt.hash(password, workFactor);
  }
}

module.exports = UserManager;
