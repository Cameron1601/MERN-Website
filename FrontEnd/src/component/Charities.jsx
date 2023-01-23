import React from "react";

const Charities = () => {
  return (
    <div>
      <section id="charities">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 mt-3">
              <h1 className="display-4 fw-bolder mb-4 text-center text-white">
                Charities
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section id="Mission">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6 d-flex flex-column align-items-center text-white justify-content-center order-2">
              <img src="/assets/helping.jpg" alt="About" className="w-75 mt-5" />
            </div>
            <div className="col-md-6">
              <hr />
              <p className="lead">
                <p>
                  As a small business or NGO, is your cybersecurity program
                  strong enough to protect against today's sophisticated cyber
                  threats? Can you offer paying for a cyber specialist to fix
                  you system problems?
                </p>
                Cyber hack is a company that connects the providers of the cyber
                security specialists to the clients that they need this service.
                Our clients are mainly non-for-profit organizations for free.
                The volunteer will use our web application to apply to be one of
                our volunteers and help in their service. The NGO will also
                apply to be a client for our company. So, our main goal is to
                connect the 2 ends and make sure that the need for help is
                fulfilled.
              </p>

              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Charities;
