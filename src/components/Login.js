import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Login() {
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const history = useHistory();
  const [token, setToken] = useState();
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    const { id, value } = e.target;
    axios
      .post("/user/login", {
        username: state.username,
        password: state.password,
      })
      .then((res) => {
        console.log(res.data);
        setToken(res.data.token)
        localStorage.setItem("auth-token", res.data.token);
        history.push("/home");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
    setState({ username: "", password: "" });
  };
  return (
    <div className="card">
      <h1 className="card-header">Login</h1>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-contorl">
          <label>Username:</label>
          <br />
          <input
            type="text"
            id="username"
            value={state.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-contorl">
          <label>Password:</label>
          <br />
          <input
            type="text"
            id="password"
            value={state.password}
            onChange={handleChange}
          />
        </div>

        <div className="form-contorl">
          <button className="success">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
