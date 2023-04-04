import React, { useState } from "react";
import "../styles/contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    pnumber: "",
    message: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Your code to send the form data to the server or perform any other action goes here
  };

  return (
    <form onSubmit={handleSubmit}>
      <table>
        <tr>
          <td><label>First Name:</label></td>
          <td><input type="text" id="fname" name="fname" value={formData.fname} placeholder="First Name" onChange={handleChange} /></td>
        </tr>
        <tr>
          <td><label>Last Name:</label></td>
          <td><input type="text" id="lname" name="lname" value={formData.lname} placeholder="Last Name" onChange={handleChange} /></td>
        </tr>
        <tr>
          <td><label>Email:</label></td>
          <td><input type="text" id="email" name="email" value={formData.email} placeholder="Email" onChange={handleChange} /></td>
        </tr>
        <tr>
          <td><label>Phone Number:</label></td>
          <td><input type="text" id="pnumber" name="pnumber" value={formData.pnumber} placeholder="Phone Number" onChange={handleChange} /></td>
        </tr>
        <tr>
          <td><label>Message:</label></td>
          <td><input type="text" id="message" name="message" value={formData.message} placeholder="Message" onChange={handleChange} /></td>
        </tr>
      </table>
      <button type="submit">Send</button>
    </form>
  );
}

export default Contact;







