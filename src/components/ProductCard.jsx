import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ProductCard = ({
  products,
  addToCart,
  quantities,
  handleQuantityChange,
  increment,
  decrement,
}) => {
  return (
    <div className="products">
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Card
              sx={{
                maxWidth: 345,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: 500,
                padding: 1.5,
              }}
            >
              <CardMedia
                sx={{ height: 200, objectFit: "scale-down", display: "block" }}
                image={product.image}
                title={product.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {product.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {product.description.length > 100
                    ? product.description.substring(0, 150) + "..."
                    : product.description}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", marginTop: 1 }}
                >
                  Price: ${product.price}
                </Typography>
                <div
                  className="shop-buttons"
                  style={{
                    marginTop: "10px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <TextField
                    size="small"
                    type="number"
                    variant="outlined"
                    value={quantities[product.id] || 1}
                    sx={{
                      width: "80px",
                      "& .MuiInputBase-root": { height: 30 },
                      borderRadius: "4px",
                    }}
                    onChange={(e) =>
                      handleQuantityChange(product.id, e.target.value)
                    }
                  />
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    onClick={() => decrement(product.id)}
                  >
                    -
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    onClick={() => increment(product.id)}
                  >
                    +
                  </Button>
                </div>
              </CardContent>
              <CardActions>
                <Button
                  startIcon={<AddShoppingCartIcon />}
                  size="small"
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() =>
                    addToCart(product, quantities[product.id] || 1)
                  }
                >
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCard;
