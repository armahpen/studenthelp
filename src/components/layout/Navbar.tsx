
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/lovable-uploads/d1a8d558-1045-4dc2-b113-92afe94680bd.png" alt="Student Learn Logo" className="h-8 w-8" />
            <span className="text-xl font-playfair font-bold">Student Learn</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary font-medium transition-colors">
              About Us
            </Link>
            <Link to="/subjects" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Subjects & Levels
            </Link>
            <Link to="/contact">
              <Button className="btn-primary">Contact Us</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-gray-700 hover:text-primary focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 animate-fade-in">
            <div className="flex flex-col space-y-4 pt-2 pb-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-primary font-medium px-4 py-2 rounded-md hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-primary font-medium px-4 py-2 rounded-md hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/subjects" 
                className="text-gray-700 hover:text-primary font-medium px-4 py-2 rounded-md hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Subjects & Levels
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-primary font-medium px-4 py-2 rounded-md hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
