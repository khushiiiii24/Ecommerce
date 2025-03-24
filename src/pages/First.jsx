import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { createContext, useState } from "react";

export const cartContext = createContext();

function First() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <cartContext.Provider value={{ cart, setCart }}>
        <Header />
        <Outlet />
        <Footer />
      </cartContext.Provider>
    </>
  );
}

export default First;
