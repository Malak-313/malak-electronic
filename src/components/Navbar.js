import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="topbar">
      <div className="container nav-content">
        <Link to="/" className="brand">Malak <span>Electronics</span></Link>
        <nav aria-label="Main navigation">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
export default Navbar;
