import axios from "axios";//→ Axios ek library hai jo API se data fetch karne ke kaam aati hai (HTTP GET/POST request).
import { useEffect, useState } from "react";
import ProductDisplay from "../components/ProductDisplay";

function Home() {
  const [products, setProducts] = useState([]);
//Ek state variable products banaya gaya jo initially empty array hai. Isme API se aane wale products store honge.

  useEffect(() => {
    fetchData();//useEffect ensures ki fetchData() sirf component mount hone ke baad ek baar chale.
  }, []);//[] ka matlab: only first render pe call karo.
  async function fetchData() {
    const result = await axios.get("https://ecommerce-api-8ga2.onrender.com/api/product");//→ axios.get() se API se saare products fetch kiye ja rahe hain.//await ka matlab: wait karo jab tak data aata hai.

    console.log(result.data);
    setProducts(result.data);//→ API se aayi list ko products state mein store kar diya.


  }

  return (
    <>
      <div className="products">
        {products.length > 0 &&
          products.map((product) => {//→ Agar products mein data hai (length > 0), tab map() se har product ke liye ek card banega.
            return <ProductDisplay key={product.id} product={product} />;//→ Har product ko ProductDisplay component mein bhej diya gaya props ke through.// key={product.id} React ko fast rendering ke liye chahiye.
          })}
      </div>
    </>
  );
}

export default Home;
