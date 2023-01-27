import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  const [profile, setProfile] = useState("");
  const { name, email, role, createdAt } = profile;

  useEffect(() => {
    fetch("/api/getme")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setProfile(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container-fluid dashboard_container">
      <div className="row">
        <div className="col-sm-4">
          <div className="card card_dashboard">
            <div className="card-header">
              <b>User Dashboard</b>
              {!role ? (
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"> Name: {name}</li>
                  <li className="list-group-item"> E-mail: {email}</li>
                  <li className="list-group-item">
                    {" "}
                    Join at: {new Date(createdAt).toLocaleDateString()}
                  </li>
                  <li className="list-group-item">
                    {" "}
                    {role === 1 ? "Admin" : "Registred User"}
                  </li>
                </ul>
              ) : (
                <div>
                  <Link
                    to="/AdminDashboard"
                    className="btn btn-outline-primary ms-2 px-4 rounded-pill"
                  >
                    <i className="fa fa-sign-out me-2"></i>Admin
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="col-sm-8"></div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
