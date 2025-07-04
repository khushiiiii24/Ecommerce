import React, { useContext } from "react";
import "./Cart.css";
import { FaRupeeSign, FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { EcomContext } from "../components/UseContext";

// Limit characters for clean UI
function trimContent(input, wordLimit = 8) {
  if (!input) return "";
  return input.split(" ").slice(0, wordLimit).join(" ") + (input.split(" ").length > wordLimit ? "..." : "");
}

function Cart() {
  const { cart, setCart, increment, decrement } = useContext(EcomContext);

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item._id !== id);
    setCart(updatedCart);
  };

  const subTotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container">
      <div className="cart-section">
        <h2>🛒 Shopping Cart</h2>
        <p>
          You have {cart.length} item{cart.length !== 1 && "s"} in your cart.
        </p>
        {cart.map((item) => (
          <div className="cart-item" key={item._id}>
            <img src={item.url} alt={item.name} />
            <div className="item-details">
              <h3>{trimContent(item.name)}</h3>
              <p className="description">{trimContent(item.description, 12)}</p>
              <p>
                Price: <FaRupeeSign /> {item.price}
              </p>
              <div className="actions">
                <span className="quantity-control">
                  <FaMinus onClick={() => decrement(item._id)} />
                  <strong>{item.quantity}</strong>
                  <FaPlus onClick={() => increment(item._id)} />
                </span>
                <span className="price">
                  <FaRupeeSign />
                  {item.price * item.quantity}
                </span>
                <button className="delete-btn" onClick={() => removeItem(item._id)}>
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
        ))}
        <h3 className="subtotal">
          Subtotal: <FaRupeeSign />
          {subTotal.toFixed(2)}
        </h3>
      </div>
    </div>
  );
}

export default Cart;
