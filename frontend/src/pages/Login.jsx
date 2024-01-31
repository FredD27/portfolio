import React, { useState } from "react";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import "./login.css";

export default function App() {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <div className="big-login-container">
      <h1 className="login-title">Connectez-vous</h1>
      <div className="login-container">
        <form>
          <div className="login-input">
            <MDBInput
              className="mb-4"
              type="email"
              id="form1Example1"
              label="Email"
              name="email"
              onChange={onChange}
            />

            <MDBInput
              className="mb-4"
              type="password"
              id="form1Example2"
              label="Mot de Passe"
              name="password"
              onChange={onChange}
            />
          </div>
          <MDBBtn type="submit" block>
            Connexion
          </MDBBtn>
        </form>
      </div>
    </div>
  );
}
