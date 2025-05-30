import React from 'react';
import Footer from './Footer';

function About() {
  return (
    <div>

      {/* Hero Section */}
      <div className="bg-light py-5 text-center">
        <div className="container">
          <h1 className="display-5 fw-bold text-dark">About Our Store</h1>
          <p className="lead">Celebrating the beauty of handmade craftsmanship</p>
        </div>
      </div>

      {/* About Content Section */}
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="/assets/images/h1.webp"
              alt="Handmade crafts"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <h3 className="text-dark">Who We Are</h3>
            <p>
              We are a passionate team dedicated to bringing you beautifully crafted, handmade
              products from artisans across the country. Every item in our store is made with love,
              care, and creativity.
            </p>
            <p>
              Our goal is to promote sustainable, local craftsmanship and support small businesses
              by giving them a digital platform to showcase their talent.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="bg-secondary text-white py-5">
        <div className="container text-center">
          <h2 className="mb-4">Our Mission & Vision</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <h4>🌿 Our Mission</h4>
              <p className=" text-white">
                To connect talented artisans with customers looking for unique, handmade products
                while promoting sustainability and creativity.
              </p>
            </div>
            <div className="col-md-6">
              <h4>🌟 Our Vision</h4>
              <p className=" text-white" >
                To become the leading platform for handmade goods, empowering local artisans and
                celebrating traditional crafts in a modern world.
              </p>
            </div>
          </div>
        </div>
      </div>
     <Footer/>
    </div>
  );
};

export default About;
