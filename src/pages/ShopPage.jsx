import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import CircularIndeterminate from "../components/CircularLoader";

export default function ShopPage({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFakeProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");

        const updatedProducts = response.data.map((product) => ({
          ...product,
          quantity: 0,
        }));

        setProducts(updatedProducts);
      } catch (err) {
        console.log("Error: ", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFakeProducts();
  }, []);

  if (loading)
    return (
      <div className="loader-container">
        <CircularIndeterminate />
      </div>
    );

  return (
    <div className="shop-page">
      <h1>Shop</h1>
      <ProductCard products={products} addToCart={addToCart} />
    </div>
  );
}
