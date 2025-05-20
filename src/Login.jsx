import { useState } from "react";
import "./index.css";
import Header from "./Header";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Logged In:", user);
  };

  return (
    <>
      <Header />
      <div className="container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
          <input type="password" placeholder="Password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
