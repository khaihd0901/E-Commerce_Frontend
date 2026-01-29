import { useState } from "react";
import { Link } from "react-router";
import { useUserStore } from "@/stores/userStore";
import { toast } from "sonner";
import ConfirmDialog from "../components/ConFirmDialog";

const WishlistCard = ({ item }) => {
  const { userRemoveProductFromWishList, userGetAllWishList } = useUserStore();
  const [openConfirm, setOpenConfirm] = useState(false);

  const handleConfirmRemove = async () => {
    try {
      await userRemoveProductFromWishList(item._id);
      await userGetAllWishList();
      setOpenConfirm(false);
    } catch (err) {
      console.log(err)
      toast.error("Failed to remove product");
    }
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-sm p-4 relative">
        {/* Remove */}
        <button
          onClick={() => setOpenConfirm(true)}
          className="absolute top-3 right-3 text-gray-400 hover:text-red-500"
          title="Remove"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        <img
          src={item.images[0].url}
          alt={item.title}
          className="w-full h-40 object-contain mb-4"
        />

        <h3 className="text-sm font-semibold line-clamp-2">{item.title}</h3>
        <p className="text-lg font-bold mt-2">${item.price}</p>

        <div className="flex gap-2 mt-4">
          <button className="flex-1 py-2 bg-[var(--color-232f3e)] text-white rounded-lg text-sm">
            Add to Cart
          </button>

          <Link
            to={`/products/${item._id}`}
            className="flex-1 py-2 border rounded-lg text-center text-sm"
          >
            View
          </Link>
        </div>
      </div>

      {/* Confirm dialog */}
      <ConfirmDialog
        open={openConfirm}
        title="Remove product"
        message="Are you sure you want to remove this product from your wishlist?"
        onCancel={() => setOpenConfirm(false)}
        onConfirm={handleConfirmRemove}
      />
    </>
  );
};

export default WishlistCard;
