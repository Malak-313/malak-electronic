import { Link } from "react-router-dom";
import products from "../data/products";

function Cart({ cart }) {
  let total = 0;

  return (
    <main className="container page">
      <p className="small-title">YOUR SELECTION</p>
      <h1>My Cart</h1>
      <p className="muted">Items you added are listed below.</p>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <p>Explore our products and add your favorites.</p>
          <Link className="button-link" to="/products">View Products</Link>
        </div>
      ) : (
        <div className="cart-list">
          {cart.map(item => {
            const product = products.find(p => p.id === item.productId);
            if (!product) return null;
            total += product.price * item.quantity;

            return (
              <div className="cart-row" key={item.productId}>
                <img src={product.image} alt={product.name} />
                <div className="cart-details">
                  <h2>{product.name}</h2>
                  <p>Price: ${product.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <p className="cart-subtotal">${product.price * item.quantity}</p>
              </div>
            );
          })}
          <h2 className="total">Total Price: ${total}</h2>
        </div>
      )}
    </main>
  );
}
export default Cart;
