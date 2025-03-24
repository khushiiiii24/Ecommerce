import axios from "axios";
import { useContext, useState } from "react";
import { useEffect } from "react";
import "../pages/style.css";
import { FaRupeeSign } from "react-icons/fa";
import { Link } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import notfound from "../assets/notfound.jpeg";
import "../pages/Home.css";
import { cartContext } from "./First";
function Home() {
  useEffect(() => {
    fetchProducts();
  }, []);
  const [products, setProducts] = useState([]);
  const { cart, setCart } = useContext(cartContext);

  async function fetchProducts() {
    // let products=await fetch("https://fakestoreapi.in/api/products");
    // products=await products.json();
    // setProducts(products.data.products)

    const products = await axios.get("https://fakestoreapi.in/api/products");
    console.log(products.data.products);
    setProducts(products.data.products);
  }
  function trimContent(prod) {
    const TrimedTitle = prod.split(" ");
    if (TrimedTitle.length > 7) {
      const title = TrimedTitle.slice(0, 8).join(" ");
      return title + "...";
    } else {
      return prod;
    }
  }
  function notfoundimg(product) {
    if (product.image) {
      return product.image;
    } else {
      return notfound;
    }
  }

  function handleAddToCart(product) {
    setCart([...cart, product]);
  }

  return (
    <div className="productConatiner">
      {products.map((product) => {
        return (
          <div className="product" key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img src={product.image}  />
            </Link>
            <div className="productTitle">{trimContent(product.title)}</div>
            <div className="productCategory">{product.category}</div>

            <div className="productPrice">
              <FaRupeeSign />
              {product.price}
            </div>
            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
