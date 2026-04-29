"use client";
import Image from "next/image";

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
        <button className="buy-btn" onClick={handleBuy}>
          📞 Inquire Now
        </button>
      </div>
    </div>
  );
}