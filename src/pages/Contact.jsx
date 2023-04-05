import React, { useState } from "react";
import "../styles/contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    pnumber: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      formData.fname === "" ||
      formData.lname === "" ||
      formData.email === "" ||
      formData.pnumber === "" ||
      formData.message === ""
    ) {
      alert("Please fill in all fields, thank you");
      return;
    }
    if (!isValidEmail(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }
    if (!isValidPhone(formData.pnumber)) {
      alert("Please enter a valid phone number");
      return;
    }
    console.log(formData);
    setSubmitted(true);
  };

  // Validation functions
  const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //regex pattern that matches valid email addresses
    return re.test(String(email).toLowerCase());
  };

  const isValidPhone = (phone) => {
    const re = /^\d{10}$/; //regex pattern that matches valid phone numbers
    return re.test(String(phone));
  };

  return (
    <>
      {submitted ? (
        <div style={{ color: "yellow" }}>Thank you for your submission!</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <table>
            <tr>
              <td>
                <label>First Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  value={formData.fname}
                  placeholder="First Name"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Last Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  value={formData.lname}
                  placeholder="Last Name"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Email:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  placeholder="Email"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Phone Number:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="pnumber"
                  name="pnumber"
                  value={formData.pnumber}
                  placeholder="Phone Number"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Message:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="message"
                  name="message"
                  value={formData.message}
                  placeholder="Message"
                  onChange={handleChange}
                />
              </td>
            </tr>
          </table>
          <button type="submit">Send</button>
        </form>
      )}
    </>
  );
}

export default Contact;
