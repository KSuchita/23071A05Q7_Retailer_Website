import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Register from "./Register";
import Login from "./Login";
import Catalog from "./Catalog";
import Cart from "./Cart";
import Payment from "./Payment";
import Invoice from "./Invoice";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/catalog" element={<Catalog addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/invoice" element={<Invoice order={{ id: 123, amount: 100 }} />} />
      </Routes>
    </Router>
  );
};

export default App;
