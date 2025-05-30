import React from 'react';
import { Link } from 'react-router-dom';
import { featuredCategories } from './data/featuredCategories';
import { productPreviews } from './data/productPreviews';
import { testimonials } from './data/testimonials';
import Footer from './Footer';
import '../App.css'

function Index() {
  return (
    <div>

      {/* Main Hero Carousel */}
      <div
        id="mainCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#mainCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#mainCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#mainCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          />
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="assets/images/a2.webp" className="carousel-img" alt="First slide" />
            <div className="carousel-caption d-none d-md-block">
              <h3 className="text-white">Co Creating With Traditional Artisans to</h3>
              <h3 className="text-white">Preserve our Heritage</h3>
              <p className="text-white">Design | Co-Creation | HandCraft</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="/assets/bgi.jpg" className="carousel-img" alt="Second slide" />
            <div className="carousel-caption d-none d-md-block">
              <h3 className="text-white">Adapting Timeless Craft Forms With</h3>
              <h3 className="text-white">Our Services</h3>
              <p className="text-white">Reviving Handicrafts and Folk Art Forms</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="assets/images/a3.webp" className="carousel-img" alt="Third slide" />
            <div className="carousel-caption d-none d-md-block">
              <h3 className="text-white">Elevate Your Occasions With Impactful,</h3>
              <h3 className="text-white">Preserve our Heritage</h3>
              <p className="text-white">Customised Bulk Gifting Solutions For Your Next Occasion</p>
            </div>
          </div>
        </div>



        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Featured Categories */}
      <section className="container py-5">
        <h2 className="mb-4 text-center text-primary fw-bold">
          Explore Our Categories
        </h2>
        <div className="row g-4">
          {featuredCategories.map((cat) => (
            <div key={cat.name} className="col-sm-6 col-md-3">
              <Link
                to={`/category/${cat.name}`}
                className="text-decoration-none text-dark"
              >
                <div className="card shadow-sm">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="card-img-top"
                    style={{ height: '180px', objectFit: 'cover' }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{cat.name}</h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Product Preview Carousel */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="mb-4 text-center text-primary fw-bold">
            Featured Products
          </h2>
          <div
            id="productCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {productPreviews.map((product, idx) => (
                <div
                  key={product.id}
                  className={`carousel-item ${idx === 0 ? 'active' : ''}`}
                >
                  <div className="row justify-content-center">
                    <div className="col-md-6">
                      <div className="card text-center shadow-sm">
                        <img
                          src={product.image}
                          className="card-img-top"
                          alt={product.name}
                        />
                        <div className="card-body">
                          <h5 className="card-title">{product.name}</h5>
                          <p className="card-text text-muted">
                            ₹{product.price}
                          </p>
                          <Link to={`/view/${product.id}`} className="btn btn-outline-success mt-auto">
                            View Product
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#productCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#productCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container py-5">
        <h2 className="mb-4 text-center text-primary fw-bold">
          What Our Customers Say
        </h2>
        <div className="row g-4">
          {testimonials.map((testi) => (
            <div key={testi.id} className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <p className="card-text">“{testi.text}”</p>
                  <h6 className="mt-4 mb-0 text-primary">— {testi.name}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="bg-secondary text-white py-5">
        <div className="container text-center">
          <h3 className="mb-3 fw-bold">Subscribe to Our Newsletter</h3>
          <p className="mb-4">
            Stay updated with the latest handmade products and exclusive offers.
          </p>
          <form
            className="row justify-content-center"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for subscribing!');
              e.target.reset();
            }}
          >
            <div className="col-md-4">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="form-control form-control-lg"
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-light btn-lg">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Index;
