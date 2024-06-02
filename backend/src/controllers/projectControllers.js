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

const deleteProject = async (req, res) => {
  try {
    const projectId = +req.params.id;
    await tables.project.delete(projectId);
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(404).json({ message: "Project non trouvé ..." });
  }
};

const updateProject = async (req, res) => {
  try {
    const id = +req.params.id;
    let result = await tables.project.update(id, req.body);
    if (result.affectedRows.length === 0) {
      return res.status(404);
    }
    [result] = await tables.project.findId(id);
    const project = result[0];

    return res.send(project);
  } catch (err) {
    console.error(err);
    return res.status(422).send({ error: err.message });
  }
};

module.exports = {
  getProjects,
  getProjectByName,
  deleteProject,
  updateProject,
};
