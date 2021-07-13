import React, { useContext, useState, useEffect } from "react";
import { auth, googleProvider, FacebookAuth } from "../../../config/firebase";
import PropTypes from "prop-types";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const signup = async (email, password) => {
    return await auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // send verification mail.
        userCredential.user.sendEmailVerification();
        auth.signOut();
        alert("Email sent");
      })
      .catch(alert);
  };

  const login = async (email, password) => {
    return await auth.signInWithEmailAndPassword(email, password);
  };

  const logout = async () => {
    return await auth.signOut();
  };

  const sendResetEmail = async (email) => {
    return await auth.sendPasswordResetEmail(email);
  };

  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleProvider);
  };

  const signInWithFacebook = async () => {
    await auth.signInWithPopup(FacebookAuth);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    sendResetEmail,
    signInWithGoogle,
    signInWithFacebook,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
AuthProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
