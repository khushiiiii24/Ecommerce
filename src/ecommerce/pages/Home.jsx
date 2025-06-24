import axios from "axios";
import { useEffect, useState } from "react";
import ProductDisplay from "../components/ProductDisplay";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const result = await axios.get("https://fakestoreapi.in/api/products");
    console.log(result.data.products);
    setProducts(result.data.products);
  }

  return (
    <>
      <div className="products">
        {products.length > 0 &&
          products.map((product) => {
            return <ProductDisplay key={product.id} product={product} />;
          })}
      </div>
    </>
  );
}

export default Home;
