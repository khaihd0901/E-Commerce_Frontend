import { useAuthStore } from "@/stores/authStore";
import { useCategoryStore } from "@/stores/categoryStore";

import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import {
  Heart,
  LogInIcon,
  LogOut,
  Search,
  Settings,
  ShoppingBag,
  ShoppingBasket,
  User,
} from "lucide-react";
import { useUserStore } from "@/stores/userStore";
const Header = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);
  const navigate = useNavigate();
  const MOCK_PRODUCTS = [
    { id: 1, name: "iPhone 15 Pro" },
    { id: 2, name: "Samsung Galaxy S24" },
    { id: 3, name: "MacBook Pro M3" },
    { id: 4, name: "AirPods Pro" },
  ];
  const { accessToken, user, authRefreshToken, authMe, authSignOut } =
    useAuthStore();
  const { categoryGetAll, categories } = useCategoryStore();
  const wishList = useUserStore((s) => s.wishList);
  const init = async () => {
    if (!accessToken) {
      await authRefreshToken();
    }
    if (accessToken && !user) {
      await authMe();
    }
  };
  console.log(categories);
  useEffect(() => {
    categoryGetAll();
    init();
  }, []);

  const handleLogout = async () => {
    try {
      await authSignOut();
    } catch (err) {
      console.log(err);
    }
  };
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (!value.trim()) {
      setSuggestions([]);
      setShowPopup(false);
      return;
    }

    const filtered = MOCK_PRODUCTS.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase()),
    );

    setSuggestions(filtered);
    setShowPopup(true);
  };
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setShowPopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <>
      <header className="header-top-strip py-4">
        <div className="container mx-auto flex justify-between ">
          <div className="capitalize text-white">
            free shipping over $100 & free return
          </div>
          <div className="flex gap-4">
            <p className="text-end text-white">
              Hotline: <a href="tel:+123456789">+123 456 789</a>
            </p>
          </div>
        </div>
      </header>
      <header className="header-upper py-4">
        <div className="container mx-auto flex justify-between items-center">
          <NavLink to="/">
            <h2 className="text-2xl font-bold text-white uppercase">
              greenstore
            </h2>
          </NavLink>
          <div className="flex relative">
            <input
              ref={popupRef}
              onChange={handleSearchChange}
              type="text"
              placeholder="Search products..."
              className="w-100 bg-white p-2 focus:ring-0 outline-0 rounded-l-md"
            />
            <button className="search-btn cursor-pointer hover:text-black p-2 rounded-r-md">
              <Search className="" />
            </button>
          </div>
          <div className="flex justify-around items-center gap-4">
            <Link
              to="wish-list"
              className="flex items-center text-white capitalize gap-1"
            >
              <Heart className={wishList.length > 0 ? `text-red-500` : ``} />
              <p>wish list</p>
            </Link>
            <Link
              to="/cart"
              className="flex items-center text-white capitalize relative mr-4"
            >
              <ShoppingBasket />
              <span className="bg-red-400 w-5 text-[12px] text-black ms-1 rounded-full absolute top-[-4px] left-4 text-center">
                1
              </span>
            </Link>
            {user ? (
              <div className="flex items-center text-white capitalize">
                <div className="relative group">
                  <div className="flex items-center text-white capitalize cursor-pointer gap-1">
                    <User />
                  </div>

                  <div
                    className="absolute right-0 top-full mt-2 w-44 bg-white rounded-md shadow-lg
               opacity-0 invisible group-hover:opacity-100 group-hover:visible
               transition-all duration-200 z-50"
                  >
                    <ul className="py-2 text-sm text-gray-700">
                      <li></li>
                      <li>
                        <NavLink
                          to="/me"
                          className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                        >
                          <User />
                          Profile
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/order-history"
                          className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                        >
                          <ShoppingBag />
                          Orders
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/settings"
                          className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                        >
                          <Settings />
                          Settings
                        </NavLink>
                      </li>

                      <li className="border-t my-1"></li>

                      <li>
                        <button
                          onClick={handleLogout}
                          className="w-full text-left flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-gray-100"
                        >
                          <LogOut />
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                to={"login"}
                className="flex items-center text-white capitalize"
              >
                <LogInIcon />
              </Link>
            )}
          </div>
        </div>

        {showPopup && suggestions.length > 0 && (
          <div className="absolute left-0 w-full bg-white shadow-lg rounded-md mt-4 z-50 px-2 py-4">
            <ul>
              {suggestions.map((item) => (
                <li
                  key={item.id}
                  onClick={() => {
                    navigate(`/products/${item.id}`);
                    setShowPopup(false);
                    setQuery("");
                  }}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200 text-sm rounded-md"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        )}

        {showPopup && suggestions.length === 0 && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-md mt-1 p-3 text-sm text-gray-500">
            No products found
          </div>
        )}
      </header>
      <header className="header-bottom py-4">
        <div className="container mx-auto">
          <div className="flex">
            <div className="flex items-center gap-22">
              {/* <div className="relative group">
                <button className="flex items-center gap-2 text-white uppercase text-[16px] tracking-wide  cursor-pointer">
                  <Menu />
                  product categories
                </button>
                <div
                  className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg opacity-0 invisible 
                    group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                >
                  <ul className="py-2 text-sm text-gray-700">
                    {categories?.map((c,i)=>(
                      <li key={i}>
                      <NavLink
                        to=""
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        - {c?.categoryName}
                      </NavLink>
                    </li>
                    ))}
                  </ul>
                </div>
              </div> */}
              <div className="flex items-center gap-10">
                <NavLink
                  className="text-white uppercase text-[16px] tracking-wide"
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink
                  className="text-white uppercase text-[16px] tracking-wide"
                  to="/products"
                >
                  our store
                </NavLink>
                <NavLink
                  className="text-white uppercase text-[16px] tracking-wide"
                  to="/contact"
                >
                  contact
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
