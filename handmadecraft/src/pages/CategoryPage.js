import React, { Fragment } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productsData } from './data/products';
import Footer from './Footer';
import '../App.css';


const CategoryPage = () => {
  const { categoryName } = useParams();

  const filteredProducts = productsData.filter(
    (product) => product.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <Fragment>
      <div className="shop-container">
        <h2 className="shop-title text-primary">{categoryName}</h2>

        {filteredProducts.length === 0 ? (
          <p className="text-center">No products found in this category.</p>
        ) : (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    width="300"
                    height="200"
                  />
                </div>
                <div className="product-card-body">
                  <h2 className="product-title">{product.name}</h2>
                  <p className="product-price">₹{product.price}</p>
                  <Link to={`/view/${product.id}`} className="btn btn-outline-success mt-auto">
                    View Product
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </Fragment>
  );
};

export default CategoryPage;
