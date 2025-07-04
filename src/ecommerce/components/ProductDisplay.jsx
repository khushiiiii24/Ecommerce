import { Link } from "react-router-dom";

// 🔧 Trim function for name & description
function trimText(input, wordCount = 8) {
  const words = input.trim().split(" ");
  return words.length > wordCount ? words.slice(0, wordCount).join(" ") + "..." : input;
}

function ProductDisplay({ product }) {
  return (
    <div className="product">
      <Link to={`/product/${product._id}`}>
        <img src={product.url} alt={product.name} />
      </Link>
      <div className="content">
        <h3>{trimText(product.name, 8)}</h3>
        <p>{trimText(product.description, 12)}</p>
        <p>₹{product.price}</p>
      </div>
    </div>
  );
}

export default ProductDisplay;
