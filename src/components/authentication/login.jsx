import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { useAuth } from "./context/AuthContext";
import "../../resources/css/login.css";
export default function Login(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      if (props.link === undefined) history.push("/");
      else history.push(props.link);
    } catch {
      setError("Failed To Login");
    }
    setLoading(false);
  };

  return (
    <>
      <div className="login">
        <form onSubmit={handleSubmit}>
          {error}
          <div>
            <p>Welcome!</p>
          </div>
          <br></br>
          <br></br>
          <div className="emailLogIn">
            <label htmlFor="email">Email: </label>

            <input
              id="email"
              ref={emailRef}
              required
              type="email"
              placeholder="Email"
            />
          </div>

          <div className="passwordLogIn">
            <label htmlFor="password">Password: </label>
            <input
              id="password"
              ref={passwordRef}
              required
              type="password"
              placeholder="Pasword"
            />
          </div>
          <div className="buttonLogin">
            <button id="loginButton" disabled={loading} type="submit">
              Login
            </button>
          </div>
        </form>
        <br></br>
        <br></br>
        <div className="extra">Or LogIn using</div>

        <i class="fab fa-google"></i>
        <i class="fab fa-facebook-f"></i>
        <div className="loginBottom">
          <br></br>
          <br></br>
          <p>
            <Link to={{ pathname: "/signup" }}> SignUp | </Link>
            <Link to={{ pathname: "" }}> Forget Password</Link>
          </p>
        </div>
      </div>
    </>
  );
}
