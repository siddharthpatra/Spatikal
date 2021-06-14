import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import "../../resources/css/signUp.css";
export default function Signup(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { signup } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return setError("Passwords Donot Match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      if (props.link === undefined) history.push("/");
      else history.push(props.link);
    } catch {
      setError("Failed To Create An Account");
    }
    setLoading(false);
  };

  return (
    <>
      <div className="signUp">
        <form onSubmit={handleSubmit}>
          {error}
          <div>
            <p>Welcome!</p>
          </div>
          <br></br>
          <br></br>
          <div className="emailSignUp">
            <label htmlFor="email">Email: </label>
            <input id="email" ref={emailRef} required type="email" />
          </div>
          <div className="passwordSignUp">
            <label htmlFor="password">Password: </label>
            <input id="password" ref={passwordRef} required type="password" />
          </div>
          <div className="cPasswordSignUp">
            <label htmlFor="password_Confirmation">
              Confirm your Password:{" "}
            </label>
            <input
              id="password_Confirmation"
              ref={passwordConfirmationRef}
              required
              type="password"
            />
          </div>
          <button disabled={loading} type="submit">
            Sign Up
          </button>
        </form>

        <div className="SignUpBottom">
          <br></br>
          <br></br>
          <p>
            <Link to={{ pathname: "/login" }}>Login</Link>
          </p>
        </div>
      </div>
    </>
  );
}
