import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { useEcom } from "../contexts/EcomProvider";

function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

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
        <h2>{product.title}</h2>
        <h4>{product.category}</h4>
        <p>{product.description}</p>
        <p>{product.price}</p>

        <div className="cta">
          <button>Add To Wishlist</button>
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
