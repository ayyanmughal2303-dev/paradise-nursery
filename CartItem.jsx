import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem, updateQuantity } from "../redux/CartSlice";

function CartItem() {
const dispatch = useDispatch();

const cartItems = useSelector((state) => state.cart.items);

// Calculate total quantity of all products
const totalItems = cartItems.reduce(
(total, item) => total + item.quantity,
0
);

// Calculate total cart amount
const totalAmount = cartItems.reduce(
(total, item) => total + item.price * item.quantity,
0
);

const increaseQuantity = (item) => {
dispatch(
updateQuantity({
id: item.id,
quantity: item.quantity + 1,
})
);
};

const decreaseQuantity = (item) => {
dispatch(
updateQuantity({
id: item.id,
quantity: item.quantity - 1,
})
);
};

const handleDelete = (id) => {
dispatch(removeItem(id));
};

const handleCheckout = () => {
alert("Coming Soon!");
};

return ( <div className="cart-page">
{/* Navigation Bar */} <nav className="navbar"> <Link to="/" className="logo">
Paradise Nursery </Link>

```
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/plants">Plants</Link>
      <Link to="/cart">
        🛒 Cart ({totalItems})
      </Link>
    </div>
  </nav>

  {/* Shopping Cart */}
  <main className="cart-container">
    <h1>Shopping Cart</h1>

    {cartItems.length === 0 ? (
      <div className="empty-cart">
        <h2>Your cart is empty</h2>

        <Link to="/plants" className="continue-shopping">
          Continue Shopping
        </Link>
      </div>
    ) : (
      <>
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              {/* Plant Thumbnail */}
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />

              {/* Plant Information */}
              <div className="cart-item-info">
                <h2>{item.name}</h2>

                <p>
                  Unit Price: ${item.price.toFixed(2)}
                </p>

                <p>
                  Total: $
                  {(item.price * item.quantity).toFixed(2)}
                </p>
              </div>

              {/* Quantity Controls */}
              <div className="quantity-controls">
                <button
                  onClick={() => decreaseQuantity(item)}
                  aria-label={`Decrease ${item.name} quantity`}
                >
                  −
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => increaseQuantity(item)}
                  aria-label={`Increase ${item.name} quantity`}
                >
                  +
                </button>
              </div>

              {/* Delete Button */}
              <button
                className="delete-button"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="cart-summary">
          <h2>Cart Summary</h2>

          <p>
            Total Items: <strong>{totalItems}</strong>
          </p>

          <h2>
            Total Amount: ${totalAmount.toFixed(2)}
          </h2>

          <div className="cart-actions">
            <button
              className="checkout-button"
              onClick={handleCheckout}
            >
              Checkout
            </button>

            <Link
              to="/plants"
              className="continue-shopping"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </>
    )}
  </main>
</div>
```

);
}

export default CartItem;
