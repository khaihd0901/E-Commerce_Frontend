import { BrowserRouter, Route, Routes } from "react-router";
import { Toaster } from "sonner";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout.jsx";
import Login from "./pages/Login";
import Register from "./pages/Register";
import OurShop from "./pages/OurShop";
import Contact from "./pages/Contact";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ProductDetail from "./pages/ProductDetail";
import ShoppingCart from "./pages/ShoppingCart";
import WishList from "./pages/WishList";
import Profile from "./pages/Profile";
import CheckOut from "./pages/CheckOut";
import ProtectedRoute from "./components/ProtectedRoute";
import VerifyEmail from "./pages/VerifyEmail";
import OrderHistory from "./pages/OrderHistory/OrderHistory";

function App() {

  return (
    <>
      <Toaster richColors />
      <BrowserRouter>
        <Routes>
          <Route path ="/verify-email/:token" element={<VerifyEmail/>} />
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/products" element={<OurShop />} />
            <Route path="/product/:id" element={<ProductDetail />} />

            {/* private route */}
            <Route element={<ProtectedRoute/>}>
            <Route path="/me" element={<Profile />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/wish-list" element={<WishList />} />
            <Route path="/check-out" element={<CheckOut />} />
            <Route path="/order-history" element={<OrderHistory />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
