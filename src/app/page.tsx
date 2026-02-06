import Categories from './components/home/Categories';

import Hero from './components/home/Hero';

import FeaturedMedicines from './components/home/FeaturedMedicines';

import WhyChooseUs from './components/home/WhyChooseUs';




export default function HomePage() {
  return (
    <main>
      <Hero />
      <Categories />
      <FeaturedMedicines />
      <WhyChooseUs />
  
    </main>
  );
}