import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ClientLogout } from '../../../Redux/ClientAuth';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.Client.Token);
  const logout = () => {
    dispatch(ClientLogout());
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid mx-10">
        <a className="navbar-brand pe-5 ms-3">
          <b>
            <i>USER HOME</i>
          </b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                onClick={() => {
                  navigate('/');
                }}
                aria-current="page"
              >
                <b>Home</b>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => {
                  navigate('/user_profile');
                }}
              >
                <b>Profile</b>
              </a>
            </li>
          </ul>
          {user ? (
            <h6
              className="text-white me-4"
              onClick={() => {
                navigate('/profile');
              }}
            >
              {user.name}
            </h6>
          ) : null}
          {user ? (
            <h6 className="text-white me-4" onClick={logout}>
              Logout
            </h6>
          ) : (
            <h6 className="text-white me-4" onClick={logout}>
              Login
            </h6>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
