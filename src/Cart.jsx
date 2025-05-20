import "./index.css";
import Header from "./Header";

const Cart = ({ cart }) => {
  return (
    <>
      <Header />
      <div className="container">
        <h2>Shopping Cart</h2>
        {cart.length > 0 ? (
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>1</td> {/* You can add quantity functionality later */}
                  <td>${item.price.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </>
  );
};

export default Cart;
