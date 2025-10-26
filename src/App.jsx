import React, { useState } from 'react';
import './SummerBeat.css';

const SummerBeat = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // In a real implementation, you would send this data to a server
    alert('Thank you for your message! We will get back to you soon.');
    e.target.reset();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="summer-beat">
      {/* Navigation */}
      <nav>
        <div className="nav-container">
          <div className="logo-container">
            <img src="/logo.png" alt="Summer Beat Logo" className="logo-img" />
          </div>
          
          {/* Hamburger Menu Button */}
          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Navigation Menu */}
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMenu}>About Us</a></li>
            <li className="dropdown">
              <a href="catalog.html">Catalogues</a>
              <div className="dropdown-content">
                <a href="catalog.html#summer">SB Summer Collection</a>
                <a href="catalog.html#winter">SB Winter Collection</a>
                <a href="catalog.html#cooler">SB Cooler Collection</a>
              </div>
            </li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Rest of your existing content remains the same */}
      {/* Banner Section */}
      <div className="banner-section">
        <img src="/Banner.png" alt="Summer Beat Home Appliances Banner" />
      </div>

      {/* Hero Section */}
      <div className="hero" id="home">
        <h1>Summer Beat</h1>
        <p>Cool Summers, Warm Winters — Comfort for Every Season</p>
        <div className="cta-buttons">
          <a href="#products">Explore Products</a>
          <a href="#contact">Get in Touch</a>
        </div>
      </div>

      {/* About Section */}
      <section id="about">
        <h2><span className="emoji">🌟</span>Who We Are</h2>
        <p>
          Welcome to <span className="highlight">Summer Beat Home Appliances</span>, your trusted partner for comfort and innovation — from cool summers to warm winters!
        </p>
        <p>
          We are an <span className="highlight">ISO 9001:2015 certified company</span> located at <span className="highlight">Khasra No.1160, Sihani Gate, Meerut Road, Ghaziabad, Uttar Pradesh – 201001, India</span>.
        </p>
        <p>
          Our company specializes in designing high-quality, durable, and energy-efficient home appliances that redefine everyday living. With a commitment to excellence and innovation, we bring comfort to every Indian household through our diverse product range.
        </p>
      </section>

      {/* Products Section */}
      <section id="products">
        <h2><span className="emoji">🏆</span>Our Complete Product Range</h2>
        
        <div className="products-grid">
          <div className="product-card">
            <h4><span className="emoji">☀️</span>SB Summer</h4>
            <p>When the heat rises,Summer appliances brings you relief with high-performance cooling solutions</p>
            <ul>
              <li> Ceiling Fans</li>
              <li> Pedestal Fans</li>
              <li> Table Fans</li>
              <li> Exhaust Fans</li>
              <li> All-Purpose Fans</li>
              <li> Mixers & Grinders</li>
            </ul>
          </div>

          <div className="product-card">
            <h4><span className="emoji">❄️</span>SB Winter</h4>
            <p>When temperatures drop,Winter appliances ensures your warmth with energy-efficient heating</p>
            <ul>
              <li> Fan Heaters</li>
              <li> Quartz Heaters</li>
              <li> Sun Heaters</li>
              <li> Immersion Rods</li>
              <li> Kettle Elements</li>
              <li> Halogen Heaters</li>
            </ul>
          </div>

          <div className="product-card">
            <h4><span className="emoji">💨</span>SB Cooler</h4>
            <p>Eco-friendly and cost-effective cooling solutions for sustainable comfort</p>
            <ul>
              <li> 9" Air Coolers </li>
              <li> 12" Air Coolers</li>
              <li> 16" & 18" Air Coolers </li>
              <li> 20" To 30" Air Coolers</li>
              <li> Commercial Coolers</li>
              <li> Energy Efficient Coolers</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="promise">
        <h2><span className="emoji">🏠</span>Our Promise</h2>
        <p>
          At <span className="highlight">Summer Beat</span>, we blend technology, trust, and tradition to craft appliances that suit every Indian household. We're committed to delivering:
        </p>
        <h3>✓ Premium Quality</h3>
        <p>Every product is rigorously tested and crafted to the highest standards of durability and performance.</p>
        
        <h3>✓ Affordable Pricing</h3>
        <p>Top-quality appliances at prices that fit your budget, without compromising on features or reliability.</p>
        
        <h3>✓ Excellent After-Sales Service</h3>
        <p>We stand behind our products with comprehensive customer support and reliable service nationwide.</p>
        
        <h3>✓ Innovation & Sustainability</h3>
        <p>Continuously evolving to bring energy-efficient solutions that care for your home and the environment.</p>
      </section>

      <p className="motto">"Cool Summers, Warm Winters — Comfort for Every Season"</p>

      {/* Contact & Map Section */}
      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>

        <div className="contact-container">
          
          {/* Google Map */}
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1294.5161540237482!2d77.42689544102399!3d28.68242489281087!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf132d4ab4e69%3A0x1dbf00033d8a8fe7!2sSummer%20Beat%20Home%20Appliances!5e1!3m2!1sen!2sin!4v1761286402692!5m2!1sen!2sin" 
              width="100%" 
              height="350" 
              style={{border: 0, borderRadius: '10px'}}
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Summer Beat Location"
            >
            </iframe>
            <p className="map-link">
              📍 <a href="https://maps.app.goo.gl/v5dsbne3ULpKL6Ys9" target="_blank" rel="noopener noreferrer">
              View on Google Maps
              </a>
            </p>
          </div>

          {/* Contact Form */}
          <div className="form-wrapper">
            <div className="form-container">
              <form id="contactForm" onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" className="form-control" placeholder="Enter your full name" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" className="form-control" placeholder="Enter your email" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" className="form-control" placeholder="Enter your phone number" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" className="form-control" rows="5" placeholder="Enter your message" required></textarea>
                </div>
                
                <button type="submit" className="btn-submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact" id="contact-info">
        <h2><span className="emoji">📍</span>Contact Information</h2>
        <p className="company-name"><strong>Summer Beat Home Appliances</strong></p>
        <p className="iso-badge">ISO 9001:2015 CERTIFIED</p>
        
        <div className="contact-info">
          <div className="contact-item">
            <h4>📍 Address</h4>
            <p>Khasra No.1160, Sihani Gate<br />Meerut Road, Ghaziabad<br />Uttar Pradesh – 201001, India</p>
          </div>
          
          <div className="contact-item">
            <h4>✉️ Email</h4>
            <p><a href="mailto:summerbeathomeappliance@gmail.com">summerbeathomeappliance@gmail.com</a></p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 <strong>Summer Beat Home Appliances</strong> - All Rights Reserved</p>
        <p>ISO 9001:2015 Certified | Quality • Affordability • Reliability</p>
        <p>Cool Summers, Warm Winters — Comfort for Every Season</p>
      </footer>
    </div>
  );
};

export default SummerBeat;