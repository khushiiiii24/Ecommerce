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
    if (productAlreadyExists(product.id)) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }
  function increment(id) {
    setCart(
      cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  }
  function decrement(id) {
    setCart(
      cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, quantity: cartItem.quantity > 1 ? cartItem.quantity - 1 : 1 }
          : cartItem
      )
      // .filter((cartItem)=>cartItem.quantity>0)
    );
  }
  console.log(cart);
  function productAlreadyExists(isToFind) {
    const existingProduct = cart.find((cartItem) => cartItem.id === isToFind);
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
