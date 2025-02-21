import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <span>Cart: 0</span>
    </nav>
  );
}
