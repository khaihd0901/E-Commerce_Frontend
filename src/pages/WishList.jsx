import { BreadCrumb } from "@/components/BreadCrumb";
import WishlistCard from "@/components/WishlistCard";
import { useUserStore } from "@/stores/userStore";
import { useEffect } from "react";


const WishList = () => {
  const {userGetAllWishList, wishList} = useUserStore();
  useEffect(()=>{
userGetAllWishList();
  },[])
  console.log(wishList)
  return (
    <>
    <BreadCrumb title='Wish List'/>
    <div className="max-w-6xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">My Wishlist</h1>

      {wishList.length === 0 ? (
        <div>empty wish list</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishList.map((item,i) => (
            <WishlistCard key={i} item={item} />
          ))}
        </div>
      )}
    </div>

    </>
  );
};

export default WishList;
