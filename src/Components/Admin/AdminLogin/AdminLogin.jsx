import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import adminAxios from "../../../Axios/adminAxios";
import { AdminLogin } from "../../../Redux/AdminAuth.jsx";
import { Toaster, toast } from "react-hot-toast";


function AdminLoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("")

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const generateError = (err) => toast.error(err);

    const adminFormSubmit = (e) => {

    e.preventDefault();

    if (!email.trim() || !password.trim()) {
        generateError("Please fill in all the fields")
        return;
      }
        adminAxios.post("/adminLogin", { email, password }).then((response) => {
            const result = response.data.adminResult;
            console.log(result)

            if (result.Status) {
                const token = result.token;
                console.log(token)
                dispatch(AdminLogin({ token: token }));
                navigate("/admin/admin_home");
            } else {
                setErrMsg(result.message);
                generateError(errMsg);
            }
        })
    }
    
  return (
    <div className="main-div">
      <Toaster position="bottom-center" reverseOrder={false} />
      <div className="login-content">
        <h1 className="login-text">LOGIN</h1>
        <p>WELCOME ADMIN</p>
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
          <button className="login-btn" onClick={adminFormSubmit}>
            LOGIN
          </button>
        
        </form>
      </div>
    </div>
  )
    
  
}

export default AdminLoginForm