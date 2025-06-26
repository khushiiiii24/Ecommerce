import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserContext, { EcomContext } from "../components/UseContext";
// import { useEcom } from "../contexts/EcomProvider";
import './SingleProduct.css';
function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
const {handleAddToCart,cart}=useContext(EcomContext);
const isInCart = cart.some((item) => item.id === product.id);
  useEffect(() => {
    fetchSingleData(id);
  }, [id]);

  async function fetchSingleData(id) {
    const response = await axios.get(
      "https://fakestoreapi.in/api/products/" + id
    );
    // console.log(response.data);
    setProduct(response.data.product);
  }

  return (
    <div className="singleProduct">
      <div className="left">
        <img src={product.image} alt="" />
      </div>
      <div className="right">
        <h2 className="singleProductTitle">{product.title}</h2>
        <h4>{product.category}</h4>
        <p>{product.description}</p>
        <p>{product.price}</p>

        <div className="cta">
          <button className="addToWishlist">Add To Wishlist</button>
        <button
        className="addToCart"
            onClick={() => handleAddToCart(product)}
            disabled={isInCart}
            style={{cursor:isInCart?"not-allowed":"pointer"}}
            >
              
            {isInCart ? "Already in Cart" : "Add To Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
