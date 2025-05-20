import { useState } from "react";
import "./index.css";
import Header from "./Header";

const Contact = () => {
  const [contact, setContact] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <>
      <Header />
      <div className="container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" onChange={(e) => setContact({ ...contact, name: e.target.value })} />
          <input type="email" placeholder="Email" onChange={(e) => setContact({ ...contact, email: e.target.value })} />
          <input type="text" placeholder="Subject" onChange={(e) => setContact({ ...contact, subject: e.target.value })} />
          <textarea placeholder="Message" onChange={(e) => setContact({ ...contact, message: e.target.value })} rows="4"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
