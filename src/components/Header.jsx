import { signOut } from "@/services/authService";
import { Link, NavLink } from "react-router";
import { useNavigate } from "react-router";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
const Header = ({ user }) => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    await signOut();
    localStorage.removeItem("token");
    window.location.reload();
    navigate("/");
  };
  return (
    <>
      <header className="header-top-strip py-4">
        <div className="container mx-auto flex justify-between ">
          <div className="capitalize text-white">
            free shipping over $100 & free return
          </div>
          <div className="flex gap-4">
            <p className="text-end text-white mb-0 border-r border-white pr-4">
              Hotline: <a href="tel:+123456789">+123 456 789</a>
            </p>
            <div className="text-white capitalize">english</div>
          </div>
        </div>
      </header>
      <header className="header-upper py-4">
        <div className="container mx-auto flex justify-between items-center">
          <NavLink to="/">
            <h2 className="text-2xl font-bold text-white uppercase">simp1e.</h2>
          </NavLink>
          <div className="flex">
            <Input
              type="text"
              placeholder="Search products..."
              className="ml-4 w-100 bg-white"
            />
            <Button className="search-btn cursor-pointer hover:text-black">
              <i className="fa-solid fa-magnifying-glass "></i>
            </Button>
          </div>
          <div className="flex justify-around items-center gap-4">
            <Link className="flex items-center text-white capitalize  ">
              <i className="fa-solid fa-rotate mr-1"></i>
              <p>compare</p>
            </Link>
            <Link className="flex items-center text-white capitalize">
              <i className="fa-solid fa-heart mr-1"></i>
              <p>whish list</p>
            </Link>
            <Link className="flex items-center text-white capitalize relative mr-10">
              <i className="fa-solid  fa-basket-shopping text-2xl mr-1 text-[var(--color-febd69)]"></i>
              <span className="bg-red-400 w-5 text-[12px] text-black ms-1 rounded-full absolute top-[-4px] left-4 text-center">
                1
              </span>
            </Link>
            {user ? (
              <div className="flex items-center text-white capitalize">
                <div className="relative group">
                  <div className="flex items-center text-white capitalize cursor-pointer gap-1">
                    <i className="fa-solid fa-user"></i>
                    <span>{user?.displayName || "account"}</span>
                  </div>

                  <div
                    className="absolute right-0 top-full mt-2 w-44 bg-white rounded-md shadow-lg
               opacity-0 invisible group-hover:opacity-100 group-hover:visible
               transition-all duration-200 z-50"
                  >
                    <ul className="py-2 text-sm text-gray-700">
                      <li>
                        <NavLink
                          to="/profile"
                          className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                        >
                          <i className="fa-solid fa-user"></i>
                          Profile
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/settings"
                          className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                        >
                          <i className="fa-solid fa-gear"></i>
                          Settings
                        </NavLink>
                      </li>

                      <li className="border-t my-1"></li>

                      <li>
                        <button
                          onClick={handleLogout}
                          className="w-full text-left flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-gray-100"
                        >
                          <i className="fa-solid fa-right-from-bracket"></i>
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <Link to={'/signin'} className="flex items-center text-white capitalize">
                <i className="fa-solid fa-arrow-right-to-bracket mr-1"></i>
                <p>login</p>
              </Link>
            )}
          </div>
        </div>
      </header>
      <header className="header-bottom py-4">
        <div className="container mx-auto">
          <div className="flex">
            <div className="flex items-center gap-22">
              <div className="relative group">
                <button className="flex items-center gap-2 text-white uppercase text-[16px] tracking-wide  cursor-pointer">
                  <i className="fa-solid fa-bars text-[var(--color-febd69)]"></i>
                 product categories
                </button>
                <div
                  className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg opacity-0 invisible 
                    group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                >
                  <ul className="py-2 text-sm text-gray-700">
                    <li>
                      <NavLink
                        to="/category/electronics"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Electronics
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/category/fashion"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Fashion
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/category/home"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Home & Living
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/category/sports"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Sports
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/category/toys"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Toys
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center gap-10">
                <NavLink
                  className="text-white uppercase text-[16px] tracking-wide"
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink
                  className="text-white uppercase text-[16px] tracking-wide"
                  to="/"
                >
                  our store
                </NavLink>
                <NavLink
                  className="text-white uppercase text-[16px] tracking-wide"
                  to="/"
                >
                  blogs
                </NavLink>
                <NavLink
                  className="text-white uppercase text-[16px] tracking-wide"
                  to="/"
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
