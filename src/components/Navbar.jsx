import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl">Muzammal Maqbool</Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded-md">Home</Link>
              <Link to="/projects" className="hover:bg-gray-700 px-3 py-2 rounded-md">Projects</Link>
              <Link to="/blog" className="hover:bg-gray-700 px-3 py-2 rounded-md">Blog</Link>
              <Link to="/contact" className="hover:bg-gray-700 px-3 py-2 rounded-md">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}