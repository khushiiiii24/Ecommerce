import axios from "axios";
import { useContext, useEffect, useState } from "react";
//React hooks:
// ->useState → data store karne ke liye,
// useEffect → component load hone par API call karne ke liye,
// useContext → global cart access karne ke liye

import { useNavigate, useParams } from "react-router-dom";//→ useParams() se URL ka dynamic id fetch karte hain.

import UserContext, { EcomContext } from "../components/UseContext";
// import { useEcom } from "../contexts/EcomProvider";
import './SingleProduct.css';
function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
const {handleAddToCart,cart}=useContext(EcomContext);
const isInCart = cart.some((item) => item._id === product._id);
  useEffect(() => {
    fetchSingleData();
  }, []);

  async function fetchSingleData() {
    const response = await axios.get(
      "https://ecommerce-api-8ga2.onrender.com/api/product/" + id
    );
    // console.log(response.data);
    setProduct(response.data);
  }

const navigate=useNavigate()


  return (
    <div className="singleProduct">
      <div className="left">
        <img src={product.url} alt="" />
      </div>
      <div className="right">
        <h2 className="singleProductTitle">{product.name}</h2>
        <h4>{product.category}</h4>
        <p>{product.description}</p>
        <p>{product.price}</p>

        <div className="cta">
          <button className="addToWishlist">Add To Wishlist</button>
        <button
        className="addToCart"
            onClick={() => {
              if(!isInCart){
                handleAddToCart(product)
              }
              navigate("/cart")
            } }
            
            disabled={isInCart}
            style={{cursor:isInCart? "not-allowed":"pointer"}}
            > 
            {isInCart ? "Already in Cart" : "Add To Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
