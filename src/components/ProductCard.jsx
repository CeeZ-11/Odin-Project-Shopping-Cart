import { useState } from "react";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import TextField from "@mui/material/TextField";

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
              <div className="input-buttons">
                <TextField
                  size="small"
                  type="number"
                  variant="outlined"
                  value={quantity}
                  sx={{
                    width: "100px",
                    "& .MuiInputBase-root": { height: 30 },
                    borderRadius: "0",
                  }}
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <Button
                  size="small"
                  sx={{
                    minWidth: "30px",
                    height: "30px",
                    padding: "2px 4px",
                    borderRadius: "0",
                  }}
                  variant="contained"
                  color="primary"
                  onClick={decrement}
                >
                  -
                </Button>
                <Button
                  size="small"
                  sx={{
                    minWidth: "30px",
                    height: "30px",
                    padding: "2px 4px",
                    borderRadius: "0",
                  }}
                  variant="contained"
                  color="primary"
                  onClick={increment}
                >
                  +
                </Button>
              </div>
              <Button
                startIcon={<AddShoppingCartIcon />}
                size="small"
                sx={{
                  fontSize: "0.8rem",
                }}
                variant="contained"
                color="primary"
                onClick={() => addToCart(product, quantity)}
              >
                Add to Cart
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCard;
