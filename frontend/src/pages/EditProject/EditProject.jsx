import React from "react";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import "./EditProject.css";
import { useGlobalContext } from "../../context/GlobalContext";

export default function EditProject() {
  const navigate = useNavigate();

  const { project, setProject, apiService } = useGlobalContext();
  const onChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };
  const editUser = async (e) => {
    e.preventDefault();
    try {
      await apiService.update(
        `http://localhost:3310/api/projects/edit/${project.id}`,
        project
      );
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="big-edit-container">
      <h1 className="title-edit">Modifier le Projet</h1>
      <div className="little-edit-container">
        <form onSubmit={editUser}>
          <MDBInput
            type="title"
            wrapperClass="mb-4"
            label="Titre"
            name="title"
            value={project.title}
            onChange={onChange}
          />
          <MDBInput
            type="url"
            wrapperClass="mb-4"
            label="URL"
            name="url"
            value={project.url}
            onChange={onChange}
          />
          <MDBInput
            wrapperClass="mb-4"
            className="text-wrap"
            textarea
            rows={10}
            label="Description"
            name="description"
            value={project.description}
            onChange={onChange}
          />
          <MDBInput
            wrapperClass="mb-4"
            textarea
            rows={4}
            label="Fonctionnalités"
            name="fonction"
            value={project.fonction}
            onChange={onChange}
          />

          <MDBBtn type="submit" className="mb-4" block>
            Confirmer la modification
          </MDBBtn>
        </form>
      </div>
    </div>
  );
}
