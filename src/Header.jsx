import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
  return (
    <div className="header">
      <h1>Retailer Website</h1>
      <nav>
        <Link to="/">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/payment">Payment</Link>
        <Link to="/invoice">Invoice</Link>
      </nav>
    </div>
  );
};

export default Header;
