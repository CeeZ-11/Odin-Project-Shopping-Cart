import { Box, Typography, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        minHeight: "100vh",
        backgroundImage:
          "url('https://source.unsplash.com/1600x900/?shopping')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "black",
        px: 3,
      }}
    >
      <ShoppingCartIcon sx={{ fontSize: 80, mb: 2 }} />
      <Typography variant="h2" fontWeight="bold">
        Welcome to the Shopping Cart
      </Typography>
      <Typography variant="h5" sx={{ mt: 2, maxWidth: "600px" }}>
        Discover amazing products and enjoy a seamless shopping experience!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{ mt: 4, fontSize: "1.2rem", padding: "10px 30px" }}
        onClick={() => navigate("/shop")}
      >
        Start Shopping
      </Button>
    </Box>
  );
}
