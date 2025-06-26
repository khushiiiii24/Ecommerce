import React, { useContext } from "react";
import "./Cart.css";
import { FaRupeeSign, FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { EcomContext } from "../components/UseContext";
import { FaTrash } from "react-icons/fa";

function trimContent(input) {
  return input.length > 50
    ? input.split(" ").slice(0, 8).join(" ") + "..."
    : input;
}

function Cart() {
  const { cart, setCart, increment, decrement } = useContext(EcomContext);

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const subTotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container">
      <div className="cart-section">
        <h2>Shopping cart</h2>
        <p>
          You have {cart.length} item{cart.length !== 1 && "s"} in your cart
        </p>
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <h3>{trimContent(item.title)}</h3>
              <p>
                Price: <FaRupeeSign />
                {item.price}
              </p>
              <div>
                <span>
                  <FaPlus
                    onClick={() => increment(item.id)}
                    style={{ cursor: "pointer", marginRight: "6px" }}
                  />
                  {item.quantity}
                  <FaMinus
                    onClick={() => decrement(item.id)}
                    style={{ cursor: "pointer", marginLeft: "6px" }}
                  />
                </span>
                <span style={{ marginLeft: "20px" }}>
                  <FaRupeeSign />
                  {item.price * item.quantity}
                </span>
                <button onClick={() => removeItem(item.id)}>
                  <FaTrash style={{ color: "black" }} />
                </button>
              </div>
            </div>
          </div>
        ))}
        <h3 style={{ marginTop: "20px",textAlign:"end" }}>
          Subtotal: <FaRupeeSign />
          {subTotal.toFixed(2)}
        </h3>
      </div>
    </div>
  );
}

export default Cart;
