import React from "react";
import { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuth } from "./context/AuthContext";
import "../../resources/css/login.css";
export default function Login(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { login, signInWithGoogle, signInWithFacebook } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      console.log(props)
      if (props.location.state)
        history.push(props.location.state.from.pathname);
    } catch {
      setError("Failed To Login");
    }
    setLoading(false);
  };

  const handleGoogle = async () => {
    try {
      setError("");
      setLoading(true);
      await signInWithGoogle();
      if (props.location.state)
        history.push(props.location.state.from.pathname);
    } catch {
      setError("Failed To Login");
    }
    setLoading(false);
  };

  const handleFacebook = async () => {
    try {
      setError("");
      setLoading(true);
      await signInWithFacebook();
      if (props.location.state)
        history.push(props.location.state.from.pathname);
      else history.push("/");
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
        <div className="extra">Or LogIn using</div>

        <i className="fab fa-google" onClick={handleGoogle}></i>
        <i className="fab fa-facebook-f" onClick={handleFacebook}></i>
        <div className="loginBottom">
          <Link to={{ pathname: "/signup" }}> SignUp | </Link>
          <Link to={{ pathname: "/forgotPassword" }}> Forget Password</Link>
        </div>
      </div>
    </>
  );
}

Login.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      from: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
      }),
    }),
  }),
};
