import React from "react";
import AdminNavbar from "../../Components/Admin/AdminNavbar/AdminNavbar";
import EditUser from "../../Components/Admin/EditUser/EditUser";



function UserClientTable() {
    return (
        <div className="container w-100">
            <AdminNavbar/>
            <EditUser/>
        </div>
    );
}

export default UserClientTable;