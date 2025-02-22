import { Drawer, Box, Typography, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = ({ open, handleClose, cart }) => {
  return (
    <Drawer anchor="right" open={open} onClose={handleClose}>
      <Box sx={{ width: 600, p: 2 }}>
        <Typography variant="h6">Shopping Cart</Typography>
        {cart.length === 0 ? (
          <Typography variant="body1">Your cart is empty.</Typography>
        ) : (
          cart.map((item, index) => (
            <Box
              key={index}
              sx={{ display: "flex", alignItems: "center", my: 2 }}
            >
              <Typography sx={{ flexGrow: 1 }}>
                {item.title} - ${item.price}
              </Typography>
              <IconButton color="error">
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
