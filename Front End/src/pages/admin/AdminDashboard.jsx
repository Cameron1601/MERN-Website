import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Pagination } from "antd";

const AdminDashboard = () => {
  const [profile, setProfile] = useState("");
  const { } = profile;

  useEffect(() => {
    fetch("/api/admin/isAdmin")
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
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalItem, setTotalItem] = useState(0);

  const loadUsers = () => {
    axios
      .get(`/api/allusers?pageNumber=${pageNumber}`)
      .then((res) => {
        if (res) {
          setUsers(res.data.users);
          setTotalItem(res.data.count);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    loadUsers();
  }, [pageNumber]);


  const deleteUser = (id, name) => {
    if (window.confirm(`Do you want to delete User: ${name}`)) {
      axios
        .delete(`/api/admin/user/delete/${id}`)
        .then((result) => {
          if (result) {
            loadUsers();
            toast.success(`current user ID: ${id} / ${name} deleted`);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div>
      <div className="container-fluid mb-5">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      className="feather feather-home"
                      aria-hidden="true"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    Dashboard
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      className="feather feather-file"
                      aria-hidden="true"
                    >
                      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                      <polyline points="13 2 13 9 20 9"></polyline>
                    </svg>
                    Charities
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      className="feather feather-users"
                      aria-hidden="true"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    Volunteers
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="chartjs-size-monitor">
              <div className="chartjs-size-monitor-expand">
                <div className=""></div>
              </div>
              <div className="chartjs-size-monitor-shrink">
                <div className=""></div>
              </div>
            </div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            </div>
            <div className="container-fluid ">
              <h1>Registred Users</h1>
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">User ID #</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Role</th>
                    <th scope="col">Delete User</th>
                  </tr>
                </thead>
                <tbody>
                  {users &&
                    users.map((user, id) => (
                      <tr key={id}>
                        <th scope="row">{user._id}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.role === 1 ? "Admin" : "User"}</td>
                        <td style={{ cursor: "pointer" }} onClick={() => deleteUser(user._id, user.name)}><i class="fa-solid fa-user"></i></td>
                      </tr>
                    ))}
                </tbody>
              </table>

              <Pagination
                current={pageNumber}
                total={totalItem}
                onChange={(value) => setPageNumber(value)}
                pageSize={15}
              />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
export default AdminDashboard;
