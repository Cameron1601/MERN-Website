import React from "react";

const Services = () => {
  return (
    <div>
      <section id="service">
        <div className="container my-5">
          <div className="row">
            <div className="col-12">
              <h3 className="fs-3 text-center">Our Services</h3>
            </div>
          </div>
          <div className="row mt-0">
            <div className="col-md-4">
              <div className="card p-3">
                <div className="card-body text-center">
                  <i className="fa fa-users fa-4x mb-4 text-primary"></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Volunteer</h5>
                  <p className="card-text">
                    Become a volunteer today within canada
                  </p>
                  <a
                    className="btn btn-outline-primary px-4 py-2"
                    href="http://localhost:3000/volunteers"
                    role="button"
                  >
                    Join Us
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3">
                <div className="card-body text-center">
                  <i className="fa fa-laptop fa-4x mb-4 text-primary"></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Blog</h5>
                  <p className="card-text">
                    Visit Our blog to learn whats new with Cyber Hack
                  </p>
                  <a
                    className="btn btn-outline-primary px-4 py-2"
                    href="http://localhost:3000/blog"
                    role="button"
                  >
                    Keep Updated
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3">
                <div className="card-body text-center">
                  <i className="fa fa-gift fa-4x mb-4 text-primary"></i>
                  <h5 className="card-title mb-3 fs-4 fw-bold">Charities</h5>
                  <p className="card-text">
                    Fill an application to become a charity of Cyber Hack.
                  </p>
                  <a
                    className="btn btn-outline-primary px-4 py-2"
                    href="http://localhost:3000/charities"
                    role="button"
                  >
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
