import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Products({ addToCart }) {
  return (
    <main className="container page">
      <p className="small-title">EXPLORE OUR COLLECTION</p>
      <h1>Our Products</h1>
      <p className="muted">A few everyday electronics, with simple prices.</p>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </main>
  );
}
export default Products;
