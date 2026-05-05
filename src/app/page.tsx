import Hero from './components/home/Hero';
import Categories from './components/home/Categories';
import FeaturedMedicines from './components/home/FeaturedMedicines';
import WhyChooseUs from './components/home/WhyChooseUs';
// নতুন সেকশনগুলো ইম্পোর্ট করা হলো
import Statistics from './components/home/Statistics';

import FAQ from './components/home/FAQ';
import Testimonials from './components/home/Testimonials';
import Newsletter from './components/home/Newsletter';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <main className="bg-[#05070a] text-white">
      {/* ১. হিরো সেকশন */}
      <Hero />

      {/* ২. স্ট্যাটিস্টিকস (কাউন্টার) - হিরোর পরেই এটি ট্রাস্ট তৈরি করে */}
      <Statistics />

      {/* ৩. ক্যাটাগরি সেকশন */}
      <Categories />

      {/* ৪. ফিচারড মেডিসিন (আপনার প্রজেক্টের কোর পার্ট) */}
      <FeaturedMedicines />

      {/* ৫. কেন আমাদের বেছে নেবেন (Why Choose Us) */}
      <WhyChooseUs />

      {/* ৬. কাস্টমার রিভিউ (Testimonials) */}
      <Testimonials />
      {/* ৭. সাধারণ জিজ্ঞাসা (FAQ) */}
      <FAQ />

      {/* ৮. নিউজলেটার */}
      <Newsletter />

      {/* ফুটার */}
     
    </main>
  );
}