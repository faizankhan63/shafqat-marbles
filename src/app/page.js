"use client";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Store,
  MessageCircle,
  Truck,
  Ruler,
  Package,
  Shield,
} from "lucide-react";
import "./styles/page.scss";
import ProductModal from "./components/ProductModal";
import badal from "../assets/products/Badal-800x800.webp";
import blackGold from "../assets/products/black-gold.jpg";
import bootisina from "../assets/products/Bootisina-Fancy.jpg";
import graniteBlack from "../assets/products/granite-black.webp";
import sunnyGrey from "../assets/products/Sunny-Grey.webp";
import travera from "../assets/products/travera.jpeg";

const marbleProducts = [
  {
    title: "Badal Marble",
    description:
      "Badal Grey Marble is a striking natural stone that is quarried in Pakistan. It is highly regarded for its distinctive grey color and elegant appearance. Here is a description of Badal Grey Marble",
    image: badal.src,
    alt: "Badal Grey Marble - Premium Pakistani Natural Stone with Distinctive Grey Color",
  },
  {
    title: "Black Gold Marble",
    description:
      "Black Gold Marble is a highly sought-after natural stone that is quarried in Pakistan. It is known for its exquisite beauty, elegance, and unique characteristics. This marble variety is widely used in the construction and interior design industries for various applications, including flooring, countertops, wall claddings, and decorative accents.",
    image: blackGold.src,
    alt: "Black Gold Marble - Luxurious Pakistani Stone with Gold Accents",
  },
  {
    title: "Botticino Fancy Marble",
    description:
      "Botticino Fancy Marble is a luxurious and captivating natural stone quarried in Pakistan. It is celebrated for its warm beige color, which exudes a sense of elegance and timelessness, making it a favored choice in the world of interior design.",
    image: bootisina.src,
    alt: "Botticino Fancy Marble - Elegant Beige Pakistani Marble",
  },
  {
    title: "Black Granite",
    description:
      "Jet black granite is one of the most well-liked granites in Pakistan . Marble Pk is  regarded as Pakistan’s leading distributor of Pakistani Jet black granite.  We provide Premium quality of Jet black granite for stairs, slabs, washroom vanities.",
    image: graniteBlack.src,
    alt: "Premium Jet Black Granite - High-Quality Pakistani Stone",
  },
  {
    title: "Sunny Grey Marble",
    description:
      "Sunny Grey Marble is a product of Pakistan, and it is a perfect representation of the regions exceptional workmanship and stunning natural beauty. Additionally it is often referred to as “ Balochistan Grey Marble”. This unique grey marble is readily accessible for builders, homeowners and designer to get going, making it a high quality material that can make the projects stand out.",
    image: sunnyGrey.src,
    alt: "Sunny Grey Marble - Balochistan Grey Premium Natural Stone",
  },
  {
    title: "Travera Marble",
    description:
      "Travera Marble, also known as Travera Beige Marble, is a unique and distinctive natural stone quarried in Pakistan. It is highly regarded for its fossilized appearance and beautiful beige coloration, making it a popular choice for various interior and exterior design applications.",
    image: travera.src,
    alt: "Travera Beige Marble - Distinctive Pakistani Natural Stone with Fossilized Patterns",
  },
];

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const scrollToProducts = () => {
    document.querySelector(".products").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main>
      <section className="hero">
        <div className="container">
          <Store size={60} className="icon" color="#c0a080" />
          <h1>Shafqat Marble & Granite</h1>
          <p className="tagline">
            Elevate your space with nature's finest stones
          </p>

          <div className="hero-content">
            <p className="description">
              With over 25 years of excellence in the marble and granite
              industry, we are your trusted wholesale partner for premium stone
              solutions. We offer comprehensive services including:
            </p>

            <div className="features">
              <div className="feature">
                <Truck size={24} className="feature-icon" />
                <span>Delivery Services</span>
              </div>
              <div className="feature">
                <Ruler size={24} className="feature-icon" />
                <span>Expert Measurements</span>
              </div>
              <div className="feature">
                <Package size={24} className="feature-icon" />
                <span>Wholesale Supply</span>
              </div>
              <div className="feature">
                <Shield size={24} className="feature-icon" />
                <span>Quality Products</span>
              </div>
            </div>

            <button className="cta-button" onClick={scrollToProducts}>
              View Our Collection
            </button>
          </div>
        </div>
      </section>

      <section className="products">
        <div className="container">
          <h2>Our Collection</h2>
          <div className="cards-grid">
            {marbleProducts.map((product, index) => (
              <div
                key={index}
                className="product-card"
                onClick={() => setSelectedProduct(product)}
              >
                <img 
                  src={product.image} 
                  alt={product.alt || `${product.title} - Premium Pakistani Marble`} 
                  loading="lazy"
                />
                <div className="card-content">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="container">
          <h2>Get in Touch</h2>
          <div className="contact-info">
            <a href="tel:+923226671946" className="contact-item">
              <Phone size={24} className="icon" />
              <div className="content">
                <p className="label">Call Us</p>
              </div>
            </a>
            <a
              href="https://wa.me/+923226671946"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <MessageCircle size={24} className="icon" />
              <div className="content">
                <p className="label">WhatsApp</p>
              </div>
            </a>
            <a href="mailto:jk3241581@gmail.com" className="contact-item">
              <Mail size={24} className="icon" />
              <div className="content">
                <p className="label">Email Us</p>
              </div>
            </a>

            <a
              href="https://maps.google.com/?q=31.529089,74.319649"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <MapPin size={24} className="icon" />
              <div className="content">
                <p className="label">Visit Us</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </main>
  );
}
