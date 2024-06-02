const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  constructor() {
    super({ table: "project" });
  }

  findByName(title) {
    return this.database.query(
      `
      SELECT 
        project.*,
        GROUP_CONCAT(skill.name) AS skills
      FROM 
        project
      LEFT JOIN 
        project_skill ON project.id = project_skill.project_id
      LEFT JOIN 
        skill ON project_skill.skill_id = skill.id
      WHERE 
        project.title = ?
      GROUP BY 
        project.id;
    `,
      [title]
    );
  }

  async update(id, project) {
    const { title, description, fonction, url } = project;

    try {
      const [result] = await this.database.query(
        `UPDATE ${this.table} SET title = ?, description = ?, fonction = ?, url = ? WHERE id = ?`,
        [title, description, fonction, url, id]
      );

      return result;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}

module.exports = ProjectManager;
