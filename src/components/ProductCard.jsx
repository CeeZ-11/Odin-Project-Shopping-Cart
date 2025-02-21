import { useState } from "react";

const ProductCard = ({ products, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div className="products">
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
            <div className="shop-buttons">
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <button onClick={decrement}>-</button>
              <button onClick={increment}>+</button>
              <button onClick={() => addToCart(product, quantity)}>
                Add to Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCard;
