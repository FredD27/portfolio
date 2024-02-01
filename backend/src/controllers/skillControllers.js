const tables = require("../tables");

const getSkills = (_, res) => {
  tables.skill
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = { getSkills };
