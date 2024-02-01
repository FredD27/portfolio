const tables = require("../tables");

const getProjects = async (_, res) => {
  try {
    const [rows] = await tables.project.findAll();
    res.send(rows);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const getProjectByName = async (req, res) => {
  const name = req.params.title;
  try {
    const [result] = await tables.project.findByName(name);
    if (!result.length) {
      return res.status(404).send({ error: "Project not found" });
    }
    const project = result[0];
    return res.send(project);
  } catch (error) {
    return res.status(422).send({ error: error.message });
  }
};

module.exports = { getProjects, getProjectByName };
