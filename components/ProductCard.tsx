"use client";
import Image from "next/image";
import toast from "react-hot-toast";
import { useState } from "react";

// Define the Animal type
type Animal = {
  id: number;
  name: string;
  category: string;
  price: number;
  location: string;
  age: string;
  vaccinated: string;
  healthStatus: string;
  image: string;
};

export default function ProductCard({ animal }: { animal: Animal }) {
  const handleBuy = () => {
    alert(`🐷 Thank you for your interest in ${animal.name}! Our farm manager will contact you within 24 hours.`);
  };
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [copied, setCopied] = useState(false);

  const phoneNumber = "+2348069403559";

  const handleCopy = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopied(true);
    toast.success("Phone number copied");

    setTimeout(() => setCopied(false), 2000);
  };

  const openWhatsApp = () => {
  //if (!selectedProduct) return;

  const phone = phoneNumber.replace("+", "");

  const message = `Hi, I'm interested in livestocks`;

  const encodedMessage = encodeURIComponent(message);

  window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
  }

  return (
    <div className="product-card">
      <div 
        className="product-image" 
        style={{ backgroundImage: `url(${animal.image})` }}
      >
        <div className="product-badge">{animal.category}</div>
      </div>
      <div className="product-info">
        <h3 className="product-title">{animal.name}</h3>
        <div className="product-price">
          ₦{animal.price.toLocaleString()} <small>per unit</small>
        </div>
        <div className="product-details">
          <p>📍 {animal.location}</p>
          <p>🐾 Age: {animal.age}</p>
          <p>💉 Vaccinated: {animal.vaccinated}</p>
          <p>⭐ {animal.healthStatus}</p>
        </div>
        <button
                onClick={handleCopy}
                 className="whatsapp-btn"
              >
                {copied ? "Copied " : "Copy Number "}
              </button>
        <button
                onClick={openWhatsApp}   className="buy-btn"
              >
                WhatsApp 
              </button>
      </div>
    </div>
  );
}