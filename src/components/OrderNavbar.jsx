import { Link } from "react-router-dom";

const OrderNavbar = () => (
  <nav className="order-navbar">
    <Link to="current">Current Orders</Link>
    <Link to="history">Order History</Link>
    <Link to="cancelled">Cancelled Orders</Link>
  </nav>
);

export default OrderNavbar;