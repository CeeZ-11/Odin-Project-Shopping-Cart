import { useState, useEffect } from "react";
import axios from "axios";

export default function ShopPage({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFakeProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        console.log("response: ", response.data);
      } catch (err) {
        console.log("Error: ", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFakeProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <div className="shop-page">
      <h1>Shop</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              width="150px"
              height="150px"
            />
            <h4>{product.title}</h4>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
