const database = require("../../database/client");

class AbstractManager {
  constructor({ table }) {
    this.table = table;
    this.database = database;
  }

  findAll() {
    return this.database.query(`select * from  ${this.table}`);
  }

  findId(id) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE id = ?`, [
      id,
    ]);
  }

  delete(id) {
    return this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
  }
}

// Ready to export
module.exports = AbstractManager;
