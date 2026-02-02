
import PopularProduct from "@/components/PopularProduct";
import PromoCard from "@/components/PromoCard";
import ServicesBar from "@/components/ServicesBar";
import TopBanner from "@/components/TopBanner";
import { useProductStore } from "@/stores/productStore";
import { useEffect } from "react";
import TopSelling from "@/components/TopSelling";
const HomePage = () => {
  const { products, productGetAll } = useProductStore();
  useEffect(() => {
    productGetAll();
  }, []);
  return (
    <section className="py-6">
      <TopBanner />
      <ServicesBar />
      <PromoCard />
      <TopSelling products={products} />
      <div className="w-full py-8">
        <img src="../../public/images/organic-categories-banner.webp" className="rounded-xl bg-clip-border" alt="" />
      </div>
      <PopularProduct products={products}/>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 py-8">
        <img src="../../public/images/order-image01.webp" alt="" />

        <img src="../../public/images/order-image02.webp" alt="" />
      </div>
    </section>
  );
};

export default HomePage;
