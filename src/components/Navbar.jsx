import { Link } from "react-router-dom";

export default function Navbar({ cartCount }) {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/Shop">ShopPage</Link>
      <span>Cart: {cartCount} </span>
    </nav>
  );
}
