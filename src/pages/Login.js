import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {
  const [isSigningIn, setIsSigningIn] = React.useState(false);
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    if (isSigningIn) return;
    setIsSigningIn(true);

    signInWithPopup(auth, provider)
      .then((result) => {
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error during sign-in:", error.message);
      })
      .finally(() => {
        setIsSigningIn(false);
      });
  };

  return (
    <div className="loginPage">
      <p>Sign In With Google to Continue</p>
      <button
        className="login-with-google-btn"
        onClick={signInWithGoogle}
        disabled={isSigningIn}
      >
        {isSigningIn ? "Signing In..." : "Sign in with Google"}
      </button>
    </div>
  );
}

export default Login;
