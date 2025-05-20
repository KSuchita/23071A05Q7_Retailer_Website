import "./index.css";
import Header from "./Header";

const Payment = () => {
  const retailer = {
    name: "SuperMart Retailers",
    address: "123 Market Street, Hyderabad",
    contact: "+91-9876543210",
  };

  const handlePayment = () => {
    alert("Payment Successful!");
  };

  return (
    <>
      <Header />
      <div className="container">
        <h2>Payment Details</h2>
        <div className="retailer-info">
          <h3>Retailer Information</h3>
          <p><strong>Name:</strong> {retailer.name}</p>
          <p><strong>Address:</strong> {retailer.address}</p>
          <p><strong>Contact:</strong> {retailer.contact}</p>
        </div>
        <button onClick={handlePayment}>Pay Now</button>
      </div>
    </>
  );
};

export default Payment;
