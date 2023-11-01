import React from "react";
import EditProfile from "../../Components/Clients/EditProfile/EditProfile";
import Navbar from "../../Components/Clients/Navbar/Navbar";

function UserEditProfile() {
    return (
        <div className="container mt-3">
            <Navbar />
            <EditProfile />
        </div>
    );
}

export default UserEditProfile;