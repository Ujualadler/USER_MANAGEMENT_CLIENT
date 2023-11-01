import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Toaster, toast } from "react-hot-toast";
import userAxios from "../../../Axios/userAxios";
import "../SignUp/SignUp";
import { ClientLogin } from "../../../Redux/ClientAuth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const generateError = (err) => toast.error(err);

  const LoginSubmit = (e) => {
    e.preventDefault();

   
    if (!email.trim() && !password.trim()) {
      generateError("Please fill in all the fields");
      return;
    }
    if(!email.trim()){
      generateError("Please fill the Email field");
      return;
    }
    if(!password.trim()){
      generateError("Please fill the Password field");
      return;
    }

    userAxios
      .post("/login", { email, password })
      .then((response) => {
        const result = response.data.userSignUp;
        console.log(result);
        if (result.Status === true) {
          const token = result.token;
          dispatch(ClientLogin({ token: token }));
          navigate("/");
        } else {
          setErrMsg(result.message);
          generateError(errMsg);
        }
      })
      .catch((error) => {
        generateError("An error occurred. Please try again.");
        console.error(error);
      });
  };

  return (
    <div className="main-div">
      <Toaster position="bottom-center" reverseOrder={false} />
      <div className="login-content">
        <h1 className="login-text">LOGIN</h1>
        <p>Please Enter Your Login Details</p>
        <form className="login-input">
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
            type="email"
            name="username"
            placeholder="email"
            value={email}
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
            type="password"
            name="password"
            placeholder="password"
            value={password}
          />
          <button className="login-btn" onClick={LoginSubmit}>
            LOGIN
          </button>
          <div className="signup-navi">
            <p>Not yet registered..?</p>
            <p>
              <Link className="lo-sign" to="/signup">
                SignUp
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

