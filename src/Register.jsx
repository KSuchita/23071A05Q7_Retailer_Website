import { useState } from "react";
import "./index.css";
import Header from "./Header";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registered User:", user);
  };

  return (
    <>
      <Header />
      <div className="container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" onChange={(e) => setUser({ ...user, name: e.target.value })} />
          <input type="email" placeholder="Email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
          <input type="password" placeholder="Password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
          <input type="text" placeholder="Phone Number" onChange={(e) => setUser({ ...user, phone: e.target.value })} />
          <input type="text" placeholder="Address" onChange={(e) => setUser({ ...user, address: e.target.value })} />
          <input type="text" placeholder="City" onChange={(e) => setUser({ ...user, city: e.target.value })} />
          <input type="text" placeholder="State" onChange={(e) => setUser({ ...user, state: e.target.value })} />
          <input type="text" placeholder="ZIP Code" onChange={(e) => setUser({ ...user, zip: e.target.value })} />
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
};

export default Register;
