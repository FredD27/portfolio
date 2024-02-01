const AbstractManager = require("./AbstractManager");

class SkillManager extends AbstractManager {
  constructor() {
    super({ table: "skill" });
  }
}

module.exports = SkillManager;
