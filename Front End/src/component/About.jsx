import React from "react";

const About = () => {
  return (
    <div>
      <section id="about">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 mt-3">
              <h1 className="display-4 fw-bolder mb-4 text-center text-white">
                About Us
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section id="Mission">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6">
              <img src="/assets/cyber.jpg" alt="About" className="w-75 mt-5" />
            </div>
            <div className="col-md-6">
              <h1 className="display-6">
                <b> Mission </b>
              </h1>
              <hr />
              <p className="lead">
                In an increasingly connected and digitized world no business is
                safe from cyber-attacks. At Cyber Hack our mission is to educate
                and enable charities to protect their computer and information
                systems allowing them to focus on maximizing their social
                impact.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="Vision">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6 d-flex flex-column align-items-center text-white justify-content-center order-2">
              <img src="/assets/Vision.png" alt="About" className="w-75 mt-5" />
            </div>
            <div className="col-md-6">
              <h1 className="display-6">
                Our<b> Vision </b>
              </h1>
              <hr />
              <p className="lead">
                To lead Canadian cyber security services for charities while
                motivating and empowering Canadian Veterans to trace and
                continue their career in the cyber security field.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="general">
        <div className="container py-5">
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <h1 className="display-6">
              <b> Core Values </b>
            </h1>
            <hr />
            <p className="lead">
              <h2>Education</h2>
              <p>
                Knowledge is power. We want to empower the next generation of
                cyber security talent by providing educational resources. We
                want to educate the planet to achieve our vision of creating a
                more secure planet.
              </p>
              <h2>Professional Development</h2>
              <p>
                Despite the growing demand for cyber security there is often a
                barrier of experience in place to prevent students and new
                graduates from entering the industry. We want to bridge this gap
                by giving aspiring cyber security professionals an opportunity
                to gain relevant experience.
              </p>
              <h2>Integrity</h2>
              <p>
                We hold ourselves accountable by measuring ourselves against the
                highest standards of integrity and fiscal responsibility.
              </p>
              <h2>Trust</h2>
              <p>
                We build trust through constructive, candid communication that
                serves the common good. We value the talent, time and intentions
                of all of our volunteers.
              </p>
              <h2>Passion</h2>
              <p>
                We love cyber security. All the industry professionals that work
                with our organization love cyber security with a passion and do
                this outside their career. We love the idea of being able to
                apply our talent to give back to our community.
              </p>
            </p>
          </div>
        </div>
      </section>
      <section id="Partners">
        <div className="container my-5 py-5 ">
          <div className="row">
            <div className="col-md-6">
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
                Bank of America, Gannet, Xeroix, Verision , Advance auto parts,
                Kyocera, Alsco, BDO, Sharp , Alliance Data, Essendant, Rocky,
                Intuit, DeRoyal, Ricoh, Impact, AOL., Toshiba, ICC, UniGroup,
                Sales Centre, Wells Fargo, Gordon, FedEx, GateHouse, United
                Stationers, Cascaddes, Great America, RJYoung, IA Financial,
                Rent Path, Eye Lighting
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
