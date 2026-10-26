import { Outlet } from "react-router-dom";
import OrderNavbar from "../components/OrderNavbar";

const Orders = () => (
  <div className="orders-container">
    <h1>Order Management</h1>
    <p className="subtitle">Manage and track your orders</p>

    <OrderNavbar />

    <div className="order-content">
      <Outlet />
    </div>
  </div>
);

export default Orders;