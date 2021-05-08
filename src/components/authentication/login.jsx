import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { useAuth } from "./context/AuthContext";

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
      <form onSubmit={handleSubmit}>
        {error}
        <div>
          <label htmlFor="email">Email:</label>
          <input id="email" ref={emailRef} required type="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input id="password" ref={passwordRef} required type="password" />
        </div>
        <button disabled={loading} type="submit">
          Login
        </button>
      </form>
      <div>
        <p>
          Need an Account?<Link to={{ pathname: "/signup" }}>Signup</Link>
        </p>
      </div>
    </>
  );
}
