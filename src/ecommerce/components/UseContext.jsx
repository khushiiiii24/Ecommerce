import { createContext, useState } from "react";
export const EcomContext = createContext();

function UserContext({ children }) {
  const [cart, setCart] = useState([]);

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
  function productAlreadyExists(isToFind) {
    const existingProduct = cart.find((cartItem) => cartItem.id === isToFind);
    return existingProduct ? true : false;
  }
  return (
    <EcomContext.Provider value={{ cart, setCart, handleAddToCart }}>
      {children}
    </EcomContext.Provider>
  );
}
export default UserContext;
