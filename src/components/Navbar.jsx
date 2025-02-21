import { Link } from "react-router-dom";

export default function Navbar({ cartCount }) {
  return (
    <nav>
      <div className="nav">
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/Shop">ShopPage</Link>
        </div>
        <span>Cart: {cartCount} </span>
      </div>
    </nav>
  );
}
