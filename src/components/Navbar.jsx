import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import IconButtonWithBadge from "./Badge";
import { useState } from "react";
import Cart from "./Cart";

export default function Navbar({ cart }) {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <nav>
      <div className="nav">
        <div className="links">
          <Link to="/">
            <Button> Home</Button>
          </Link>
          <Link to="/Shop">
            <Button> Shop</Button>
          </Link>
        </div>
        <IconButtonWithBadge
          cartCount={cart.length}
          onOpenCart={() => setCartOpen(true)}
        />
        <Cart
          open={cartOpen}
          handleClose={() => setCartOpen(false)}
          cart={cart}
        />
      </div>
    </nav>
  );
}
