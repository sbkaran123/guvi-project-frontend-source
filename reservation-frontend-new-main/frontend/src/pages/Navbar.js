import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link to="/">Restaurant Finder</Link>
        </div>
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded">
            Home
          </Link>
          <Link to="/reservations" className="text-white hover:bg-gray-700 px-3 py-2 rounded">
            Reservations
          </Link>
          <Link to="/reviews" className="text-white hover:bg-gray-700 px-3 py-2 rounded">
            Reviews
          </Link>
          <Link to="/login" className="text-white hover:bg-gray-700 px-3 py-2 rounded">
            Login
          </Link>
          <Link to="/register" className="text-white hover:bg-gray-700 px-3 py-2 rounded">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
