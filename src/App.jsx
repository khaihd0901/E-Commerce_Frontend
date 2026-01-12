import { BrowserRouter, Route, Routes } from "react-router";
import { Toaster } from "sonner";
import { useEffect, useState } from "react";
import { getUser } from "./services/authService";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout.jsx";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import OurShop from "./pages/OurShop";
import Contact from "./pages/Contact";


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
            <Route path="/signin" element={<SigninPage setUser={setUser} />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/store" element={<OurShop />} />
            <Route path="/contact" element={<Contact/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
