import React from "react";
import Navbar from "../../Components/Clients/Navbar/Navbar";
import UserProfile from "../../Components/Clients/Profile/UserProfile";

function Profile() {
    return (
        <div className="container mt-3">
            <Navbar/>
            <UserProfile/>
        </div>
    );
}

export default Profile;