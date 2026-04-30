import Image from "next/image";
export default function OwnerSection() {
  return (
    <div className="owner-section" id="owner">
      <div className="owner-grid">
        <div className="owner-avatar">
           <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-blue-400/50 shadow-lg">
              <Image 
                src="/AyojesuAjayi.jpeg" // Put your photo in the public folder as ceo-hassan.jpg
                alt="Ajayi Ayojesu - CEO"
                fill
                className="object-cover"
              />
            </div>
        </div>
        <div className="owner-info">
          <h3>👨‍🌾 Meet our G-JOTAR Founder - Ayojesu Ajayi</h3>
          <div className="owner-bio">
            <p>With years of experience in animal husbandry and Information Technology, Ayojesu Ajayi started G-Jotar Acres Farm with a vision to provide Nigeria with premium, ethically-raised livestock. A graduate of Computer Engineering from Ladioke Akintola University of Technology, Ogbomosho with a Master Degree in Cyber Security at Teesside University, United Kingdom. He has trained over 500 small-scale farmers across West Africa.</p>
            <p style={{ marginTop: '1rem' }}>🏆 Award-Winning Breeder (2022, 2023, 2024)<br />
            📚 Author of "Modern Livestock Management in Tropics"<br />
            🤝 Member, Nigerian Veterinary Medical Association</p>
          </div>
        </div>
      </div>
    </div>
  );
}