import React from "react";

import ShopLogo from '/icons/ShopLogo.svg';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const paymentIcons = [
	'https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg',
	'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg',
];



const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 px-6 md:px-10 text-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo and Description */}
        <div className="col-span-1 md:col-span-2">
          <img src={ShopLogo} alt="Shop.co Logo" className="w-32 mb-4" />
          <p className="text-sm mb-4">
            We have clothes that suits your style and which you’re proud to wear. From women to men.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black">
              <FaTwitter size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black">
              <FaFacebookF size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-lg font-bold uppercase mb-4">Company</h4>
          <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:text-black">About</a></li>
            <li><a href="#" className="hover:text-black">Features</a></li>
            <li><a href="#" className="hover:text-black">Works</a></li>
            <li><a href="#" className="hover:text-black">Career</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="text-lg font-bold uppercase mb-4">Help</h4>
          <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:text-black">Customer Support</a></li>
            <li><a href="#" className="hover:text-black">Delivery Details</a></li>
            <li><a href="#" className="hover:text-black">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
          </ul>
        </div>

        {/* FAQ */}
        <div>
          <h4 className="text-lg font-bold uppercase mb-4">FAQ</h4>
          <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:text-black">Account</a></li>
            <li><a href="#" className="hover:text-black">Manage Deliveries</a></li>
            <li><a href="#" className="hover:text-black">Orders</a></li>
            <li><a href="#" className="hover:text-black">Payments</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-lg font-bold uppercase mb-4">Resources</h4>
          <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:text-black">Free eBooks</a></li>
            <li><a href="#" className="hover:text-black">Development Tutorial</a></li>
            <li><a href="#" className="hover:text-black">How to - Blog</a></li>
            <li><a href="#" className="hover:text-black">Youtube Playlist</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright and Payments */}
      <div className="max-w-7xl mx-auto mt-8 border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>Shop.co © 2000-2025, All Rights Reserved</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          {paymentIcons.map((src, index) => (
            <img key={index} src={src} alt="Payment method" className="h-6" />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;