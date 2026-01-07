import Categories from '@/components/Categories';
import FeaturedCollection from '@/components/FeaturedCollection';
import ServicesBar from '@/components/ServicesBar';
import TopBanner from '@/components/TopBanner';
import React, {  } from 'react'
const HomePage = () => {
  return (
    <section className="px-4 py-6">
        <TopBanner/>
        <ServicesBar/>
        <Categories/>
        <FeaturedCollection/>
    </section>
  );
};

export default HomePage;
