import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import ContactForm from '../components/ContactForm';
import OwnerSection from '../components/OwnerSection';
import Footer from '../components/Footer';

export default function Home() {
  const animals = [
    {
      id: 1,
      name: 'Large White Pig',
      category: '🐷 Pig',
      price: 85000,
      location: 'Ogun State',
      age: '4 months',
      vaccinated: 'Yes (Full course)',
      healthStatus: 'Excellent, dewormed',
      image: '/LandRace.jpeg'
    },
    {
      id: 2,
      name: 'Droc breed Pig',
      category: '🐷 Pig',
      price: 85000,
      location: 'Ogun State',
      age: '4 months',
      vaccinated: 'Yes (Full course)',
      healthStatus: 'Excellent, dewormed',
      image: '/duroc.jpeg'
    },
    {
      id: 3,
      name: 'Large White breed Pig',
      category: '🐷 Pig',
      price: 85000,
      location: 'Ogun State',
      age: '4 months',
      vaccinated: 'Yes (Full course)',
      healthStatus: 'Excellent, dewormed',
      image: '/largewhite.jpeg'
    },
    {
      id: 4,
      name: 'Red Sokoto Goat (Buck)',
      category: '🐐 Goat',
      price: 65000,
      location: 'Sokoto State',
      age: '6 months',
      vaccinated: 'Yes',
      healthStatus: 'Healthy, ready for breeding',
      image: 'https://images.unsplash.com/photo-1524024973431-2ad916746881?w=500'
    },
    {
      id: 5,
      name: 'West African Dwarf Goat',
      category: '🐐 Goat',
      price: 55000,
      location: 'Lagos',
      age: '5 months',
      vaccinated: 'Yes',
      healthStatus: 'Disease-resistant breed',
      image: '/goat.jpeg'
    },
    {
      id: 6,
      name: 'Broiler Chickens (100 pcs)',
      category: '🐔 Poultry',
      price: 125000,
      location: 'Oyo State',
      age: '6 weeks',
      vaccinated: 'Marek’s, Gumboro',
      healthStatus: 'Fast-growing, high yield',
      image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=500'
    }//,
    // {
    //   id: 7,
    //   name: 'Layers (Point of Lay)',
    //   category: '🥚 Poultry',
    //   price: 3500,
    //   location: 'Ogun State',
    //   age: '18 weeks',
    //   vaccinated: 'Complete',
    //   healthStatus: 'Ready to lay, high production',
    //   image: 'https://images.unsplash.com/photo-1569529467454-2d4d9f9d9f9d?w=500'
    // },
    // {
    //   id: 8,
    //   name: 'Duroc Pig (Breeding Boar)',
    //   category: '🐷 Pig',
    //   price: 120000,
    //   location: 'Kaduna State',
    //   age: '8 months',
    //   vaccinated: 'Yes',
    //   healthStatus: 'Top genetics, fast growth',
    //   image: 'https://images.unsplash.com/photo-1585155906416-b08e5c5e7d8b?w=500'
    // }
  ];

  return (
    <>
      <Header />
      <Hero />
      
      <div className="container" id="products">
        <h2 className="section-title">🐖 Our Premium Livestock 🐐</h2>
        <div className="products-grid">
          {animals.map(animal => (
            <ProductCard key={animal.id} animal={animal} />
          ))}
        </div>
      </div>

      <div className="container">
        <ContactForm />
        <OwnerSection />
      </div>

      <Footer />
    </>
  );
}