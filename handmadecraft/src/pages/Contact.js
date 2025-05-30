import React from "react";
import Footer from "./Footer";
// import contactImage from "../images/contact.jpg"; // Make sure this image exists in public/images or src/images

function Contact() {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-primary mb-6 text-center">Contact Us</h2>

      {/* Two-column layout */}
      <div className="flex flex-col md:flex-row gap-6 items-center">
        
        {/* Left: Image Section */}
        {/* <div className="md:w-1/2 w-full">
          <img
            src={contactImage}
            alt="Contact Visual"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div> */}

        {/* Right: Contact Info & Map */}
        <div className="md:w-1/2 w-full bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Get in Touch</h3>
          <p className="text-muted mb-2">📍 <strong>Address:</strong> Amarpali Chauraha, Lucknow</p>
          <p className="text-muted mb-2">📞 <strong>Phone:</strong> +91-9876543210</p>
          <p className="text-muted mb-4">✉️ <strong>Email:</strong> support@Craftora.com</p>

          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Craftora Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.784987008891!2d80.9359710753466!3d26.846693976718736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd302a3241fb%3A0x7ec6c0e2697c5a4d!2sAmarpali%20Chauraha%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1717056114144!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
