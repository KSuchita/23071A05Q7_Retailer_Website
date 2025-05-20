import "./index.css";
import Header from "./Header";

const Invoice = ({ order }) => {
  const retailer = {
    name: "SuperMart Retailers",
    address: "123 Market Street, Hyderabad",
    contact: "+91-9876543210",
  };

  return (
    <>
      <Header />
      <div className="container">
        <h2>Invoice</h2>
        <div className="retailer-info">
          <h3>Retailer Information</h3>
          <p><strong>Name:</strong> {retailer.name}</p>
          <p><strong>Address:</strong> {retailer.address}</p>
          <p><strong>Contact:</strong> {retailer.contact}</p>
        </div>
        <div className="order-info">
          <h3>Order Details</h3>
          <p><strong>Order ID:</strong> {order.id}</p>
          <p><strong>Total Amount:</strong> ${order.amount.toFixed(2)}</p>
        </div>
      </div>
    </>
  );
};

export default Invoice;
