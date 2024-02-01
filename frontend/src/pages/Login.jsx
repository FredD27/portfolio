import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import "./login.css";
import { useGlobalContext } from "../context/GlobalContext";

function Login() {
  const givenData = useLoaderData();
  const { apiService } = useGlobalContext();
  const [user, setUser] = useState(givenData?.preloadUser?.data);
  const navigate = useNavigate();

  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const login = async () => {
    try {
      const data = await apiService.post(
        "http://localhost:3310/api/login",
        formValue
      );
      localStorage.setItem("token", data.token);
      apiService.setToken(data.token);
      const result = await apiService.get("http://localhost:3310/api/users/me");
      alert(`Content de vous revoir ${result.data.name}`);
      setUser(result.data);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      console.error(err);
      alert("Erreur de connexion. Vérifiez vos identifiants.");
    }
    return null;
  };

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login();
  };

  return (
    <div className="big-login-container">
      {user ? (
        <h1 className="login-title">Bienvenue {user.name} !</h1>
      ) : (
        <h1 className="login-title">Bienvenue</h1>
      )}
      <div className="login-container">
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
