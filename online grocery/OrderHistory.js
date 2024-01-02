import React from 'react';

const OrderHistory = ({ orders }) => {
  return (
    <div>
      {orders.map((order) => (
        <div key={order.id}>
          <p>Order ID: {order.id}</p>
          <p>Status: {order.status}</p>
          <p>Total: ${order.total}</p>
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;
