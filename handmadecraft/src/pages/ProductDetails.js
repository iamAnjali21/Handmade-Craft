import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { productsData } from './data/products'; // Adjust path if needed
import '../App.css'; // Optional for custom styling

const ProductDetails = () => {
  const navigate = useNavigate(); // ✅ Moved here at top level
  const { productId } = useParams();
  const product = productsData.find(p => p.id === Number(productId));

  if (!product) {
    return (
      <div className="product-details-container">
        <h2>Product not found!</h2>
        <Link to="/">Go back to products</Link>
      </div>
    );
  }

  const handleBuyNow = () => {
    navigate("/buy", { state: { product } }); // ✅ This now uses the hook properly
  };

  return (
    <div className="product-details-container">
      <img src={product.image} alt={product.name} className="product-detail-image" />
      <div className="product-detail-info">
        <h2>{product.name}</h2>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Price:</strong> ₹{product.price}</p>
        <p><strong>Description:</strong> {product.description || 'No description available.'}</p>

        <button onClick={handleBuyNow} className="bg-green-600 text-black px-4 py-2 rounded hover:bg-green-700">
          Buy Now
        </button>
        <br />
        <Link to="/" className="back-link">← Back to Shop</Link>
      </div>
    </div>
  );
};

export default ProductDetails;
