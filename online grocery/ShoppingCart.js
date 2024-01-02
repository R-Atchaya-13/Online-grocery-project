import React from 'react';

const ShoppingCart = ({ cartItems, onRemove, onUpdate }) => {
  return (
    <div>
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${item.price * item.quantity}</p>
          <button onClick={() => onRemove(item.id)}>Remove</button>
          <button onClick={() => onUpdate(item.id)}>Update Quantity</button>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
