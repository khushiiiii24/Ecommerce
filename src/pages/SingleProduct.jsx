import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cartContext } from "./First";
import { FaRupeeSign } from "react-icons/fa";
function SingleProduct() {
  //DESTRUCTURING
  const { id } = useParams(); //url m se dynamic part extract krke deta h
  // console.log(id);
  const [item, setItem] = useState({});
  const { cart, setCart } = useContext(cartContext);

  useEffect(() => {
    fetchData(id);
  }, [id]);

  async function fetchData(id) {
    const response = await axios.get(
      `https://fakestoreapi.in/api/products/${id}`
    );
    setItem(response.data.product);
  }
  console.log(cart);
  function handleAddToCart(item) {
    setCart([...cart, item]);
  }
  return (
    <div className="Singleproduct">
      <div className="leftSide">
        <img className="left-side-img"src={item.image} alt={item.title} />
      </div>

      <div className="rightSide">
        <div className="SingleproductTitle">{item.title}</div>
        {/* <div className="SingleproductCategory">{item.category}</div> */}

        <div className="SingleproductPrice"> <FaRupeeSign />{item.price}</div>
        <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default SingleProduct;
