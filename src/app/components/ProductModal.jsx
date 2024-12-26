"use client";
import { X, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { useState } from "react";
import "../styles/ProductModal.scss";

const ProductModal = ({ product, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample additional images for each product (you can modify these)
  const productImages = [
    product.image,
    // "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070",
    // "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070",
  ];

  const handleWhatsApp = () => {
    // Replace this with your actual WhatsApp number
    const phoneNumber = "+923226671946";
    const message = `Hi, I'm interested in ${product.title}. Can you provide more information about pricing?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === productImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? productImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="image-slider">
          <button className="slider-button prev" onClick={prevImage}>
            <ChevronLeft size={24} />
          </button>
          <img
            src={productImages[currentImageIndex]}
            alt={`${product.title} view ${currentImageIndex + 1}`}
          />
          <button className="slider-button next" onClick={nextImage}>
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="modal-info">
          <h2>{product.title}</h2>
          <p>{product.description}</p>

          <div className="image-indicators">
            {productImages.map((_, index) => (
              <button
                key={index}
                className={`indicator ${
                  index === currentImageIndex ? "active" : ""
                }`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>

          <button className="whatsapp-button" onClick={handleWhatsApp}>
            <MessageCircle size={20} />
            Inquire on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
