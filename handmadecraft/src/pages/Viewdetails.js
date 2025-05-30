// src/ViewProduct.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productsData } from './data/products';

function Viewdetails() {
    const { productId } = useParams();
    const navigate = useNavigate();

    const product = productsData.find((p) => p.id === parseInt(productId));

    if (!product) {
        return (
            <div className="container py-5 text-center">
                <h4 className="text-danger fw-semibold">Product not found</h4>
            </div>
        );
    }

    const handleBuyNow = () => {
        navigate('/buy', { state: { product } }); // ✅ Must match the route defined
    };


    return (
        <div className="container py-5">
            <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
                <div className="row g-0">

                    {/* Left Side: Image */}
                    <div className="col-md-5 bg-light d-flex align-items-center justify-content-center p-4">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="img-fluid rounded-3 shadow-sm"
                            style={{ maxHeight: '400px', objectFit: 'cover' }}
                        />
                    </div>

                    {/* Right Side: Product Details */}
                    <div className="col-md-7 p-5 d-flex flex-column justify-content-center bg-white">
                        <h2 className="fw-bold text-dark mb-3">{product.name}</h2>
                        <h4 className="text-success mb-3">Price: ₹{product.price}</h4>
                        <p className="text-muted">
                            {product.description || 'This is a beautifully handcrafted item made with care and tradition.'}
                        </p>

                        <button
                            onClick={handleBuyNow}
                            className="fw-bold shadow-sm mt-3 px-3 py-1 rounded-pill"
                            style={{
                                fontSize: '0.85rem',
                                backgroundColor: 'orange',
                                color: '#000000',
                                border: '1px solid #ccc',
                                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)'
                            }}
                        >
                            🛒 Buy Now
                        </button>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Viewdetails;
