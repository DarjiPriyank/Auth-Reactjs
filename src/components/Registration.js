import React, { useState } from "react";
import axios from "axios";

function Registration() {
  const [state, setState] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    cpassword: "",
  });
  const [error, setError] = useState();
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (state.password === state.cpassword) {
      axios
        .post("/user/register", state)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          setError(err.response.data)
        });
    } else {
      setError("Password not match with confirm password")
    }
    console.log(state);
  };
  return (
    <div className="card">{error}
      <h1 className="card-header">Registration</h1>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-contorl">
          <label>Name:</label>
          <br />
          <input
            type="text"
            id="name"
            value={state.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-contorl">
          <label>Email:</label>
          <br />
          <input
            type="text"
            id="email"
            value={state.email}
            onChange={handleChange}
          />
        </div>
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
            type="password"
            id="password"
            value={state.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-contorl">
          <label>Confirm password:</label>
          <br />
          <input
            type="password"
            id="cpassword"
            value={state.cpassword}
            onChange={handleChange}
          />
        </div>
        <div className="form-contorl">
          <button className="success">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Registration;
