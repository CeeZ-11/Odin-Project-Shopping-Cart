import { Drawer, Box, Typography, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = ({
  open,
  handleClose,
  cart,
  incrementCartItemQuantity,
  decrementCartItemQuantity,
  removeFromCart,
}) => {
  return (
    <Drawer anchor="right" open={open} onClose={handleClose}>
      <Box sx={{ maxWidth: 600, p: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Shopping Cart
        </Typography>
        {cart.length === 0 ? (
          <Typography variant="body1">Your cart is empty.</Typography>
        ) : (
          cart.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                alignItems: "center",
                my: 2,
                boxShadow: "0px 2px 3px rgba(134, 134, 134, 0.2)",
                padding: "1rem",
                borderRadius: "15px",
              }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  gap: "40px",

                  flexWrap: "wrap",
                  maxWidth: "800px",
                }}
              >
                <img width="50px" src={item.image} alt={item.title} />{" "}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      wordWrap: "wrap",
                      maxWidth: "150px",
                    }}
                  >
                    {item.title.length > 20
                      ? item.title.substring(0, 20) + "..."
                      : item.title}
                  </Typography>
                  <Typography sx={{ fontWeight: 300 }}>
                    ${item.price}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 1,
                    textAlign: "center",
                  }}
                >
                  <Button
                    size="small"
                    variant="outlined"
                    color="primary"
                    onClick={() => decrementCartItemQuantity(item.id)}
                    sx={{
                      padding: "1px",
                      minWidth: "30px",
                      width: "30px",
                    }}
                  >
                    -
                  </Button>
                  <Typography
                    type="number"
                    variant="outlined"
                    sx={{
                      fontWeight: "bold",
                    }}
                  >
                    {item.quantity}
                  </Typography>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => incrementCartItemQuantity(item.id)}
                    sx={{
                      padding: "1px",
                      minWidth: "30px",
                      width: "30px",
                    }}
                  >
                    +
                  </Button>
                </Box>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 1,
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  $ {item.quantity * item.price}
                </Typography>
              </Box>

              <IconButton color="error" onClick={() => removeFromCart(item.id)}>
                <DeleteIcon />
              </IconButton>
            </Box>
          ))
        )}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 2,
            mt: 2,
          }}
        >
          <Button variant="contained" sx={{ flex: 1 }} onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="contained"
            disabled={cart.length === 0}
            component={Link}
            to="/checkout"
            sx={{ flex: 1 }}
            onClick={handleClose}
          >
            Proceed to Checkout
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Cart;
