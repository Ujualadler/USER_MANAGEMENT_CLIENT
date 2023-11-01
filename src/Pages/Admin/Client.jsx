import React from "react";
import AdminNavbar from "../../Components/Admin/AdminNavbar/AdminNavbar";
import ClientTable from "../../Components/Admin/Clients/Clients";


function UserClientTable() {
    return (
        <div className="container w-100">
            <AdminNavbar/>
            <ClientTable/>
        </div>
    );
}

export default UserClientTable;