import React from "react";

const Footer = () => {
  return (
    <div>
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <a
            href="/"
            class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          >
            <svg class="bi me-2" width="40" height="32">
              <use href="http://localhost:3000/login"></use>
            </svg>
          </a>

          <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item">
              <a href="http://localhost:3000" class="nav-link px-2">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a
                href="http://localhost:3000/about"
                class="nav-link px-2"
              >
                About
              </a>
            </li>
            <li class="nav-item">
              <a
                href="http://localhost:3000/volunteers"
                class="nav-link px-2"
              >
                Volunteer
              </a>
            </li>
            <li class="nav-item">
              <a
                href="http://localhost:3000/charities"
                class="nav-link px-2"
              >
                Charities
              </a>
            </li>
            <li class="nav-item">
              <a
                href="http://localhost:3000/blog"
                class="nav-link px-2"
              >
                Blog
              </a>
            </li>
          </ul>
        </footer>
    </div>
  );
};

export default Footer;
