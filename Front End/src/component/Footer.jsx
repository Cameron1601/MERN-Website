import React from "react";

const Footer = () => {
  return (
    <div class="container">
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
        <p class="col-md-4 mb-0 text-dark">© 2023 CyberHack, Inc</p>
        <ul class="nav col-md-4 justify-content-end">

          <li class="nav-item">
            <a href="/" class="nav-link px-2 text-dark">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a href="/about" class="nav-link px-2 text-dark">
              About
            </a>
          </li>
          <li class="nav-item">
            <a href="/charities" class="nav-link px-2 text-dark">
              Charities
            </a>
          </li>
          <li class="nav-item">
            <a href="Volunteers" class="nav-link px-2 text-dark">
              Volunteers
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
