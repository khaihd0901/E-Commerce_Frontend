import { BrowserRouter, Route, Routes } from "react-router";
import { Toaster } from "sonner";
import { useEffect, useState } from "react";
import { getUser } from "./services/authService";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout.jsx";
import Login from "./pages/Login";
import Register from "./pages/Register";
import OurShop from "./pages/OurShop";
import Contact from "./pages/Contact";
import ForgotPassword from "./pages/ForgotPassword";
import ProductDetail from "./pages/ProductDetail";
import ShoppingCart from "./pages/ShoppingCart";
import WishList from "./pages/WishList";


function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
      const token = localStorage.getItem("token");
      const fetchUser = async () => {
        if (token) {
          try {
            const userData = await getUser(token);
            setUser(userData);
          } catch (error) {
            console.error("Failed to fetch user:", error);
            localStorage.removeItem("token");
          }
        }
      };
      fetchUser();
  }, []);
  console.log(user);
  return (
    <>
      <Toaster richColors />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout user={user} />}>
            <Route index element={<HomePage user={user} />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/forgot-password" element={<ForgotPassword/>} />
            <Route path="/products" element={<OurShop />} />
            <Route path="/product/:id" element={<ProductDetail/>}/>
            <Route path='/cart' element={<ShoppingCart/>}/>
            <Route path='/wish-list' element={<WishList/>}/>
          </Route> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
