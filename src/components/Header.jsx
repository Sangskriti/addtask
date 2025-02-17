import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 border-b border-gray-700">
      <h1 className="text-xl font-bold">AdTask.ai</h1>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#features" className="hover:text-gray-400">Features</a></li>
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
