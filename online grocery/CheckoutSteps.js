import React from 'react';

const CheckoutSteps = ({ step }) => {
  return (
    <div>
      <div className={step >= 1 ? 'active' : ''}>Step 1: Shipping</div>
      <div className={step >= 2 ? 'active' : ''}>Step 2: Payment</div>
      <div className={step >= 3 ? 'active' : ''}>Step 3: Confirm Order</div>
    </div>
  );
};

export default CheckoutSteps;
