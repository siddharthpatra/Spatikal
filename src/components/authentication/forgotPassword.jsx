import { useRef, useState } from "react";
import { useAuth } from "./context/AuthContext";
import { Link } from "react-router-dom";

const forgotPassword = () => {
  const { sendResetEmail } = useAuth();

  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const emailRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      await sendResetEmail(emailRef.current.value);
      setSent(true);
    } catch {
      setError("Failed to send mail");
    }
  };

  return (
    <div>
      {sent ? (
        <div>
          Email is sent Successfully{" "}
          <Link to={{ pathname: "/login" }}>Click here to login</Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="passwordReset">Email for password Reset: </label>
            <input
              id="passwordReset"
              required
              placeholder="Enter your email"
              type="email"
              ref={emailRef}
            />
          </div>
          <div>
              <button type="submit">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default forgotPassword;
