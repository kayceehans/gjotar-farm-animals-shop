import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">🐓 G-JOTAR FarmFresh Animals 🐖</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Animals</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#owner">Our Farmer</a></li>
        </ul>
      </div>
    </header>
  );
}