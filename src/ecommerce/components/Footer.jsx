import { useContext } from "react";
import { EcomContext } from "./UseContext";
import { Link } from "react-router-dom";
function Footer() {
  const {cart}=useContext(EcomContext)
  return (
    <header>
     Footer
    </header>
  );
}

export default Footer;
