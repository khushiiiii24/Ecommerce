import { createContext, useEffect, useState } from "react";
export const EcomContext = createContext();

function UserContext({ children }) {
//   const [cart, setCart] = useState(()=>{
//     const storeCart=localStorage.getItem("cart");
//     return storeCart?JSON.parse(storeCart):[];
//   });
// useEffect(()=>{
//   localStorage.setItem("cart",JSON.stringify(cart))
// })
const[cart,setCart]=useState([])
  function handleAddToCart(product) {
    if (productAlreadyExists(product._id)) {
      setCart(
        cart.map((cartItem) =>
          cartItem._id === product._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }
  function increment(_id) {
    setCart(
      cart.map((cartItem) =>
        cartItem._id === _id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  }
  function decrement(_id) {
    setCart(
      cart.map((cartItem) =>
        cartItem._id === _id
          ? { ...cartItem, quantity: cartItem.quantity > 1 ? cartItem.quantity - 1 : 1 }
          : cartItem
      )
    );
  }
  console.log(cart);
  function productAlreadyExists(isToFind) {
    const existingProduct = cart.find((cartItem) => cartItem._id === isToFind);
    return existingProduct ? true : false;
  }
  return (
    <EcomContext.Provider
      value={{ cart, setCart, handleAddToCart, increment, decrement }}
    >
      {children}
    </EcomContext.Provider>
  );
}
export default UserContext;
