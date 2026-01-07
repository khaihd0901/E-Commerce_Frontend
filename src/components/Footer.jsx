import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <div className="mt-10">
    <footer className="bg-[var(--color-232f3e)] text-white mt-8 border-b border-gray-700">
      <div className="py-4">
        <div className="container mx-auto ">
          <div className="grid grid-flow-col mb-4 items-center">
            <div className="row-span-8 items-center text-[16px] tracking-wide">
              <div className="flex gap-8 items-center">
                <i className="fa-solid fa-paper-plane text-2xl"></i>
                <p className="text-2xl capitalize font-medium">sign up for newsletter</p>
              </div>
            </div>
            <div className="flex row-span-4">
              <Input
                className="bg-white w-full"
                placeholder="Enter your email"
              ></Input>
              <Button className="search-btn text-white capitalize cursor-pointer hover:text-black">
                subscribe
              </Button>
            </div>
          </div>   
        </div>
      </div>
    </footer>
    <footer className="bg-[var(--color-232f3e)] text-white py-6 border-b border-gray-700">
      <div className="container mx-auto grid grid-cols-5 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="mb-2">123 Main Street, Anytown, USA</p>
          <p className="mb-2">Phone: <a href="tel:+123456789" className="underline">+123 456 789</a></p>
          <p className="mb-2">Email: <a href="mailto:contact@simp1e.com" className="underline">contact@simp1e.com</a></p>
          <p className="mb-2">Working Hours: Mon - Fri: 9 AM - 5 PM</p>
        </div>
        <div className="">
          <h3 className="text-lg font-semibold mb-4">Information</h3>
          <ul>
            <li className="mb-2"><a href="#" className="underline">Privacy Policy</a></li>
            <li className="mb-2"><a href="#" className="underline">Refund Policy</a></li>
            <li className="mb-2"><a href="#" className="underline">Shipping Policy</a></li>
            <li className="mb-2"><a href="#" className="underline">Terms & Conditions</a></li>
            <li className="mb-2"><a href="#" className="underline">Blogs</a></li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-lg font-semibold mb-4">Account</h3>
          <ul>

            <li className="mb-2"><a href="#" className="underline">About Us</a></li>
            <li className="mb-2"><a href="#" className="underline">FAQ</a></li>
            <li className="mb-2"><a href="#" className="underline">Contact</a></li>
            <li className="mb-2"><a href="#" className="underline">Size Chart</a></li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2"><a href="#" className="underline">Laptops</a></li>
            <li className="mb-2"><a href="#" className="underline">Headphones</a></li>
            <li className="mb-2"><a href="#" className="underline">Tablets</a></li>
            <li className="mb-2"><a href="#" className="underline">Watches</a></li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-lg font-semibold mb-4">Our Apps</h3>
          <p className="mb-4">Download our app for the best shopping experience.</p>
          <div className="flex gap-4">
            <a href="#">
              <img
                src="/images/app-store.png"
                alt="App Store"
                className="h-10"
              />
            </a>
            <a href="#">
              <img
                src="/images/google-play.png"
                alt="Google Play Store"
                className="h-10"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
    <footer className="bg-[var(--color-232f3e)] text-white py-6 border-t border-gray-700">
      <div className="container mx-auto text-center">
        <p className="mb-0 text-[16px] font-medium">
          &copy; {new Date().getFullYear()}; Powered by Simp1e E-Commerce
        </p>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
