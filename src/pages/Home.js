import { Link } from "react-router-dom";
import headphones from "../assets/headphones.jpg";

function Home() {
  return (
    <main className="container">
      <section className="hero">
        <div>
          <p className="small-title">WELCOME TO MALAK ELECTRONICS</p>
          <h1>Discover the tech you love.</h1>
          <p>Find simple, useful electronics at clear prices. Explore our collection and add your favorites to the cart.</p>
          <Link className="button-link" to="/products">Explore Products</Link>
        </div>
        <img src={headphones} alt="Wireless headphones" />
      </section>
      <section className="intro">
        <p className="small-title">OUR SHOP</p>
        <h2>Everyday electronics, made simple</h2>
        <p>Browse our collection of headphones, keyboards, speakers and more. Pick what you like and view everything in your cart.</p>
      </section>
    </main>
  );
}
export default Home;
