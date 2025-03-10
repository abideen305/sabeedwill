import React from 'react';
import { Moon, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-cream py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <Moon className="h-8 w-8 text-deep-green" />
            <span className="text-2xl font-playfair font-bold text-deep-green">SabeedWill</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/features" className="nav-link">Features</Link>
            <Link to="/pricing" className="nav-link">Pricing</Link>
            <Link to="/faqs" className="nav-link">FAQs</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>

          <button 
            className="md:hidden text-deep-green"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link to="/" className="block nav-link" onClick={closeMenu}>Home</Link>
            <Link to="/about" className="block nav-link" onClick={closeMenu}>About</Link>
            <Link to="/features" className="block nav-link" onClick={closeMenu}>Features</Link>
            <Link to="/pricing" className="block nav-link" onClick={closeMenu}>Pricing</Link>
            <Link to="/faqs" className="block nav-link" onClick={closeMenu}>FAQs</Link>
            <Link to="/contact" className="block nav-link" onClick={closeMenu}>Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;