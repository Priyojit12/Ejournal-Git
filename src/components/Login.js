import React from "react";
import { useState } from "react";
import { useNavigate ,Link} from "react-router-dom";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const Login = (props) => {
  let navigate = useNavigate();

  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${BASE_URL}/api/auth/userLogin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("token", json.authToken);
      navigate("/");
      props.showAlert("Loged in successfully", "success");
    } else {
      props.showAlert("Account not signed in", "danger");
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group my-3 mb-3">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            value={credentials.email}
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="exampleInputPassword1"
            placeholder="Password"
            value={credentials.password}
            onChange={onChange}
          />
        </div>
        <div className="form-group form-check my-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          login
        </button>
        <div className="row">
        <h6 className="my-2 text-center">Or create your Account</h6>
        <Link to="/singup" className="btn btn-primary  " role="button">
          Sign Up
        </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
