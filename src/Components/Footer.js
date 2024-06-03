import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-8 text-center md:text-start px-5">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-evenly gap-8">
            <div className="flex flex-col text-center md:text-start items-center md:items-start">
              <h3 className="text-lg font-bold tracking-wider mb-1">About Us</h3>
              <div className="w-20 h-1 rounded bg-white mb-4"></div>
              <p className="mb-2 max-w-96">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                scelerisque, metus ut tristique accumsan, odio enim fermentum
                nisi, eget fermentum urna metus sit amet nisi.
              </p>
              <p>123 Main Street, City, Country</p>
            </div>
            <div className="flex flex-col text-center md:text-start items-center md:items-start">
              <h3 className="text-lg font-bold tracking-wider mb-1">Quick Links</h3>
              <div className="w-20 h-1 rounded bg-white mb-4"></div>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col text-center md:text-start items-center md:items-start">
              <h3 className="text-lg font-bold tracking-wider mb-1">Contact Us</h3>
              <div className="w-20 h-1 rounded bg-white mb-4"></div>
              <p className="mb-2">Phone: +123456789</p>
              <p>Email: info@example.com</p>
              <div className="mt-4">
                <a href="#" className="text-gray-400 hover:text-white mr-4">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white mr-4">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <hr className="border-gray-600 my-8" />
          <div className="text-center">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
            <p className="mt-2 text-sm">
              Designed with <i className="fas fa-heart text-red-500"></i> by{" "}
              <a href="" className="text-gray-400 hover:text-white">
                Hammad Khan
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
