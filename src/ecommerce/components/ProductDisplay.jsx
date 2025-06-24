import { useContext } from "react";
import { EcomContext } from "./UseContext";

function trimContent(input) {
  return input.length > 50
    ? input.split(" ").slice(0, 8).join(" ") + "..."
    : input;
}

// function generateRandomHash(input) {
//   // const ciphertext = CryptoJS.AES.encrypt(input, "secret key 123").toString();
//   const ciphertext = CryptoJS.MD5(input);

//   console.log(ciphertext);
// }

// TEMPLATE LITERAL
function ProductDisplay({ product }) {
  const{handleAddToCart}=useContext(EcomContext);

  return (
    <>
      <div className="product">
        {/* {generateRandomHash(product.id)} */}
        <a href={`/product/${product.id}`}>
          <img src={product.image} alt="" />
        </a>
        <div className="content">
          <h3>{trimContent(product.title)}</h3>
          <p>{product.price}</p>
          <button onClick={()=>handleAddToCart(product)}>Add To Cart</button>
        </div>
      </div>
    </>
  );
}

export default ProductDisplay;
