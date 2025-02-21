import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export default function Navbar({ cartCount }) {
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
        <span>Cart: {cartCount} </span>
      </div>
    </nav>
  );
}
