import { BrowserRouter, Routes, Route } from "react-router-dom";  
import "./App.css";
import SignUp from "./Components/Clients/SignUp/SignUp";
import Login from "./Components/Clients/Login/Login";


import Home from "./Pages/Clients/Home";
import Profile from "./Pages/Clients/Profile";
import { useSelector } from "react-redux";
import UserEditProfile from "./Pages/Clients/EditProfile";
import AdminLoginForm from "./Components/Admin/AdminLogin/AdminLogin";
import AdminHome from "./Pages/Admin/AdminHome";
import UserClientTable from "./Pages/Admin/Client";
import EditUser from "./Components/Admin/EditUser/EditUser";
import CreateUser from "./Components/Admin/CreateUser/CreateUser";

function App() {
  const token = useSelector((store) => store.Client.Token);
  const IsAdminAuth = useSelector((state) => state.Admin.Token);
  return (
    <>
      
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/signUp" element={token?<Home/>:<SignUp/>}/>
            <Route path="/login" element={token?<Home/>:<Login />}/>
            <Route path="/user_profile" element={token?<Profile />:<Login/>}/>
            <Route path="/edit_profile" element={token?<UserEditProfile />:<Login/>}/>


            <Route path="/admin" element={<AdminLoginForm/>} />
            <Route path="/admin/admin_home" element={IsAdminAuth?<AdminHome/>:<AdminLoginForm/>} />
            <Route path="/admin/client_table" element={IsAdminAuth?<UserClientTable/>:<AdminLoginForm/>} />
            <Route path="/admin/user_edit/:id" element={IsAdminAuth?<EditUser/>:<AdminLoginForm/>} />
            <Route path="/admin/CreateUser" element={IsAdminAuth?<CreateUser/>:<AdminLoginForm/>} />
          </Routes>
        </BrowserRouter>
    
    </>
  );
}

export default App;
