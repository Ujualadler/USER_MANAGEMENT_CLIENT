import React, { useState } from "react";
import Dashboard from "../../Components/Admin/Dashboard/Dashboard"
import AdminNavbar from "../../Components/Admin/AdminNavbar/AdminNavbar";

function AdminHome() {
    return (
        <div className="container w-100">
            <AdminNavbar/>
            <Dashboard/>
        </div>
    );
}
export default AdminHome;