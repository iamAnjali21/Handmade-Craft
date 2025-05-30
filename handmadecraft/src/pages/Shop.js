import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { productsData } from './data/products';
import Footer from './Footer';
import '../App.css'; // Importing external CSS

const Shop = () => {
  const [filter, setFilter] = useState('All');

  const filteredProducts =
    filter === 'All' ? productsData : productsData.filter((product) => product.category === filter);

  return (
    <Fragment>
      <div className="container py-4">
        <h2 className="mb-4 text-center text-primary fw-bold">Our Handmade Products</h2>

        {/* Filter Buttons */}
        <div className="d-flex justify-content-center mb-4 gap-2 flex-wrap">
          {['All', 'jewellery', 'Art & Dec', 'Knitted Goods', 'Organic'].map((cat) => (
            <button
              key={cat}
              className={`btn btn-sm ${filter === cat ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <main className="shop-container">
          <div className="product-grid">
            {filteredProducts.map((product)=> (
              <article className="product-card" key={product.id}>
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
                  <p className="product-price">${product.price}</p>
                  <Link to={`/view/${product.id}`} className="btn btn-outline-success mt-auto">
                    View Product
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </Fragment>
  );
};



export default Shop;
