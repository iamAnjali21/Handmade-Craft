import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


function BuyNowPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-12">
          <div className="card border-0 shadow-lg rounded-4 p-4 bg-light">
            <div className="row g-4 align-items-center">
              
              {/* Product Image */}
              <div className="col-md-5 text-center">
               <img src={product.image} alt={product.name} 
                  className="img-fluid rounded-3 shadow"
                  style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }}
                />
              </div>

              {/* Product Info and Buyer Action */}
              <div className="col-md-7">
                <h2 className="fw-bold text-dark mb-3">{product.name}</h2>
                <p className="mb-2"><strong>Category:</strong> {product.category}</p>
                <p className="mb-3"><strong>Description:</strong> {product.description || 'No description available.'}</p>
                <h4 className="text-success mb-4">Price: ₹{product.price}</h4>

                <button
                  className="btn btn-success btn-lg px-5 py-2 rounded-pill shadow-sm"
                  onClick={() => alert("Order placed successfully!")}
                >
                  ✅ Confirm Order
                </button>
              </div>

            </div>
          </div>

          <div className="text-center mt-4">
            <button
              className="btn btn-outline-secondary"
              onClick={() => navigate('/')}
            >
              ← Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyNowPage;
