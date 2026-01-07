import Categories from '@/components/Categories';
import FeaturedCollection from '@/components/FeaturedCollection';
import PopularProduct from '@/components/PopularProduct';
import PromoCard from '@/components/PromoCard';
import ServicesBar from '@/components/ServicesBar';
import TopBanner from '@/components/TopBanner';
const HomePage = () => {
  return (
    <section className="py-6">
        <TopBanner/>
        <ServicesBar/>
        <Categories/>
        <FeaturedCollection/>
        <PromoCard/>
        <PopularProduct/>
    </section>
  );
};

export default HomePage;
