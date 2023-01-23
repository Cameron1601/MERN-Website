import React, {useState, useEffect} from 'react';
import { NavLink } from "react-router-dom";

const AdminDashboard = () => {

  const [profile, setProfile] = useState("");
  const {role} = profile;

  useEffect(()=>{
      fetch('/api/admin/isAdmin')
      .then(res =>{
          return res.json()
      })
      .then(result =>{
          setProfile(result.user)
          
      })
      .catch(error => {
          console.log(error);
      })
  }, []);
  
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
                <h1 className="h2">Dashboard</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                  <div className="btn-group me-2">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      add
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Delete
                    </button>
                  </div>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary dropdown-toggle"
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
                      className="feather feather-calendar"
                      aria-hidden="true"
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    This week
                  </button>
                </div>
              </div>
  
              <h2>Users</h2>
              <div className="table-responsive">
                <table className="table table-striped table-sm">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Password</th>
                      <th scope="col">Current Project</th>
                      <th scope="col">Hours Worked</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Jhon Smith</td>
                      <td>random</td>
                      <td>data</td>
                      <td>placeholder</td>
                      <td>text</td>
                    </tr>
                    <tr>
                      <td>1,002</td>
                      <td>placeholder</td>
                      <td>irrelevant</td>
                      <td>visual</td>
                      <td>layout</td>
                    </tr>
                    <tr>
                      <td>1,003</td>
                      <td>data</td>
                      <td>rich</td>
                      <td>dashboard</td>
                      <td>tabular</td>
                    </tr>
                    <tr>
                      <td>1,003</td>
                      <td>information</td>
                      <td>placeholder</td>
                      <td>illustrative</td>
                      <td>data</td>
                    </tr>
                    <tr>
                      <td>1,004</td>
                      <td>text</td>
                      <td>random</td>
                      <td>layout</td>
                      <td>dashboard</td>
                    </tr>
                    <tr>
                      <td>1,005</td>
                      <td>dashboard</td>
                      <td>irrelevant</td>
                      <td>text</td>
                      <td>placeholder</td>
                    </tr>
                    <tr>
                      <td>1,006</td>
                      <td>dashboard</td>
                      <td>illustrative</td>
                      <td>rich</td>
                      <td>data</td>
                    </tr>
                    <tr>
                      <td>1,007</td>
                      <td>placeholder</td>
                      <td>tabular</td>
                      <td>information</td>
                      <td>irrelevant</td>
                    </tr>
                    <tr>
                      <td>1,008</td>
                      <td>random</td>
                      <td>data</td>
                      <td>placeholder</td>
                      <td>text</td>
                    </tr>
                    <tr>
                      <td>1,009</td>
                      <td>placeholder</td>
                      <td>irrelevant</td>
                      <td>visual</td>
                      <td>layout</td>
                    </tr>
                    <tr>
                      <td>1,010</td>
                      <td>data</td>
                      <td>rich</td>
                      <td>dashboard</td>
                      <td>tabular</td>
                    </tr>
                    <tr>
                      <td>1,011</td>
                      <td>information</td>
                      <td>placeholder</td>
                      <td>illustrative</td>
                      <td>data</td>
                    </tr>
                    <tr>
                      <td>1,012</td>
                      <td>text</td>
                      <td>placeholder</td>
                      <td>layout</td>
                      <td>dashboard</td>
                    </tr>
                    <tr>
                      <td>1,013</td>
                      <td>dashboard</td>
                      <td>irrelevant</td>
                      <td>text</td>
                      <td>visual</td>
                    </tr>
                    <tr>
                      <td>1,014</td>
                      <td>dashboard</td>
                      <td>illustrative</td>
                      <td>rich</td>
                      <td>data</td>
                    </tr>
                    <tr>
                      <td>1,015</td>
                      <td>random</td>
                      <td>tabular</td>
                      <td>information</td>
                      <td>text</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }; 
export default AdminDashboard