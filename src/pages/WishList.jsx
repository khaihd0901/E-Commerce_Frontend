import { BreadCrumb } from "@/components/BreadCrumb";
import WishlistCard from "@/components/WishlistCard";
const wishlist = [
  {
    id: 1,
    title: "Kids Headphones Bulk 10 Pack",
    price: 100,
    image: "/images/cat-headphone.png",
  },
  {
    id: 2,
    title: "Smart Watch Series 7",
    price: 250,
    image: "/images/cat-watch.png",
  },
  {
    id: 3,
    title: "Portable Bluetooth Speaker",
    price: 80,
    image: "/images/cat-speaker.png",
  },
];

const WishList = () => {
  return (
    <>
    <BreadCrumb title='Wish List'/>
    <div className="max-w-6xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">My Wishlist</h1>

      {wishlist.length === 0 ? (
        <div>empty wish list</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <WishlistCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default WishList;
