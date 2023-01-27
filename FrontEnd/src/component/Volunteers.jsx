import React, { useState } from "react";

const Contact = () => {
  const [msg, setMsg] = useState({
    name: "",
    email: "",
    phone: "",
    hours: "",
    position: "",
    education: "",
    years: "",
    experience: "",
    project: "",
    criminal: "",
    refrences: "",
    resume: "",
  });
  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setMsg({ ...msg, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const {
      name,
      email,
      phone,
      hours,
      position,
      education,
      years,
      experience,
      project,
      criminal,
      refrences,
      resume,
    } = msg;
    try {
      const res = await fetch("/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          hours,
          position,
          education,
          years,
          experience,
          project,
          criminal,
          refrences,
          resume,
        }),
      });
      console.log(res.status);
      if (res.status === 400 || !res) {
        window.alert("Message Not Sent. Try Again Later");
      } else {
        window.alert("Message Sent");
        setMsg({
          name: "",
          email: "",
          phone: "",
          hours: "",
          position: "",
          education: "",
          years: "",
          experience: "",
          project: "",
          criminal: "",
          refrences: "",
          resume: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <section id="about">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 mt-3">
              <h1 className="display-4 fw-bolder mb-4 text-center text-white">
                Volunteer
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section id="message">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-md-6">
              <img
                src="/assets/volunteer.jpeg"
                alt="Contact"
                className="w-75"
              />
            </div>
            <div className="col-md-6">
              <form onSubmit={handleSubmit} method="POST">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="John Smith"
                    name="name"
                    value={msg.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    name="email"
                    value={msg.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Phone number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="123-456-7890"
                    name="phone"
                    value={msg.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Number of hours to commit to weekly
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="hours"
                    placeholder="4-5 hours"
                    name="hours"
                    value={msg.hours}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Position if working
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="position"
                    placeholder="Software Developer"
                    name="position"
                    value={msg.position}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Education level
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="eduaction"
                    placeholder="College"
                    name="education"
                    value={msg.education}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Years of experience
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="years"
                    placeholder="3 years"
                    name="years"
                    value={msg.years}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Experience in?
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="experience"
                    placeholder="Java"
                    name="experience"
                    value={msg.experience}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Projects interested in
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="project"
                    placeholder="Food app"
                    name="project"
                    value={msg.project}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Do you allow us to do a Criminal background check?
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="criminal"
                    placeholder="Yes or No"
                    name="criminal"
                    value={msg.criminal}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    References
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="refrences"
                    placeholder="Name, Email, Phone Number, Relationship"
                    name="refrences"
                    value={msg.refrences}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Resume
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="resume"
                    placeholder="Resume "
                    name="resume"
                    value={msg.resume}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-outline-primary rounded-pill px-4"
                >
                  Send Message <i className="fa fa-paper-plane ms-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
