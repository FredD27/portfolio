// import React, { useState } from "react";
// import { useLoaderData, useNavigate } from "react-router-dom";

import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import "./login.css";
import { useGlobalContext } from "../context/GlobalContext";

function Login() {
  const { formValue, setFormValue, login, user } = useGlobalContext();

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <div className="big-login-container">
      {user ? (
        <h1 className="login-title">Bienvenue {user.name} !</h1>
      ) : (
        <h1 className="title">Bienvenue</h1>
      )}
      <div className="little-login-container">
        <form onSubmit={handleSubmit}>
          <div className="login-input">
            <MDBInput
              className="mb-4"
              value={formValue.email}
              type="email"
              id="form1Example1"
              label="Email"
              name="email"
              onChange={onChange}
            />

            <MDBInput
              className="mb-4"
              value={formValue.password}
              type="password"
              id="form1Example2"
              label="Mot de Passe"
              name="password"
              onChange={onChange}
              onKeyPress={handleKeyPress}
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

export default Login;
