import React from "react";
import { BiDonateBlood, BiUserCircle } from "react-icons/bi";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();

  // logout handler
  const handleLogout = () => {
    localStorage.clear();
    alert("Logout Successfully");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <BiDonateBlood size={30} color="red" /> VitalFlow Blood Bank
        </Link>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item mx-3">
            <p className="nav-link">
              <BiUserCircle size={30} /> Welcome{" "}
              {user?.name || user?.hospitalName || user?.organisationName}
              <span className="badge bg-secondary ms-3">{user?.role}</span>
            </p>
          </li>
          {location.pathname === "/" ||
          location.pathname === "/donor" ||
          location.pathname === "/hospital" ? (
            <li className="nav-item mx-3">
              <Link to="/analytics" className="nav-link">
                Analytics
              </Link>
            </li>
          ) : (
            <li className="nav-item mx-3">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
          )}
          <li className="nav-item mx-3">
            <button
              className="btn btn-danger shadow-lg bg-gradient"
              onClick={handleLogout}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
