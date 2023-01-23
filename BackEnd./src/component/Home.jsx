import React from "react";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <section id="home">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8% mt-3 100%">
              <h1 className="display-4 fw-bolder mb-4 text-center text-white">
                Cyber Hack{" "}
              </h1>
              <p className="lead text-center fs04 mb-5 text-white">
                leaders in Canadian cyber security services for charities.
                Powered by veterans{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="Who">
        <div className="container my-5 py-1 100%">
          <div className="row">
            <div className="col-md-6">
              <img
                src="/assets/cyberimage.jpeg"
                alt="About"
                className="w-75 mt-3"
              />
            </div>
            <div className="col-md-6">
              <h1 className="display-6">
                Who <b> we </b> are{" "}
              </h1>
              <hr />
              <p className="lead">
                In an increasingly connected and digitized world no business is
                safe from cyber-attacks. At Cyber Hack our mission is to educate
                and enable charities to protect their computer and information
                systems allowing them to focus on maximizing their social
                impact.
              </p>
              <a
                className="btn btn-outline-primary px-4 py-2"
                href="http://localhost:3000/about"
                role="button"
              >
                About Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="Partners">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-md-6 d-flex flex-column align-items-center text-white justify-content-center order-2">
              <img
                src="/assets/clients222.png"
                alt="About"
                className="w-75 mt-2"
              />
            </div>
            <div className="col-md-6">
              <h1 className="display-6">
                <b>Clients</b> and <b>Partners</b>
              </h1>
              <hr />
              <p className="lead">
                Active list of all of our active clients and partners. Donate
                now to join our list of supporters
              </p>
              <a
                className="btn btn-primary px-4 py-2"
                href="http://localhost:3000/about"
                role="button"
              >
                Partners
              </a>
            </div>
          </div>
        </div>
      </section>
      <Services />
    </div>
  );
};
export default Home;
