import React, { useEffect, useState } from "react";
import axios from "axios";
function blog() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/"
    );
    console.log(response);
    setItems(response.data);
  }

  return (
    <>
      <div>
        {items.map((item) => {
          return (
            <div key={item.id}>
              <h1>{item.id}</h1>
              <h2>{item.title}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default blog;
