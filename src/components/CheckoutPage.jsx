import { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CheckoutPage = ({ cart, clearCart, totalPrice }) => {
  const [billingDetails, setBillingDetails] = useState({
    name: "",
    email: "",
    address: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBillingDetails({
      ...billingDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckout = () => {
    console.log("Order placed:", { billingDetails, cart });
    clearCart();
    alert("Order placed successfully!");
    navigate("/");
  };

  return (
    <Box sx={{ maxWidth: 600, margin: "auto", padding: 15 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
        Checkout
      </Typography>

      <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
        Billing Details
      </Typography>
      <TextField
        fullWidth
        label="Full Name"
        name="name"
        value={billingDetails.name}
        onChange={handleChange}
        margin="dense"
      />
      <TextField
        fullWidth
        label="Email"
        name="email"
        value={billingDetails.email}
        onChange={handleChange}
        margin="dense"
      />
      <TextField
        fullWidth
        label="Address"
        name="address"
        value={billingDetails.address}
        onChange={handleChange}
        margin="dense"
      />

      <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
        Order Summary
      </Typography>
      {cart.length === 0 ? (
        <Typography>Your cart is empty.</Typography>
      ) : (
        cart.map((item) => (
          <Typography key={item.id}>
            {item.quantity} x {item.title} - ${item.quantity * item.price}
          </Typography>
        ))
      )}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 2,
          p: 2,
          borderTop: "1px solid #ddd",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Total:
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          ${totalPrice.toFixed(2)}
        </Typography>
      </Box>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 3 }}
        onClick={handleCheckout}
        disabled={cart.length === 0}
      >
        Place Order
      </Button>
    </Box>
  );
};

export default CheckoutPage;
