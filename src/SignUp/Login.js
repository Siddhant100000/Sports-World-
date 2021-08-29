import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { auth } from "firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Login Logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-In</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button className="login__signInButton" onclick={signIn}>
            Sign In
          </button>

          <p>By Signing in you agree to ALL of sports world TOS !</p>

          <button className="login__registerButton" onClick={register}>
            Create your Sports World Account!
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
