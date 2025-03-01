
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface DropdownItem {
  title: string;
  href: string;
}

interface NavItem {
  title: string;
  href: string;
  dropdown?: DropdownItem[];
}

const navItems: NavItem[] = [
  { title: 'Home', href: '/' },
  { 
    title: 'Explore SBCET', 
    href: '#', 
    dropdown: [
      { title: 'About Us', href: '/about' },
      { title: 'Infrastructure', href: '/infrastructure' },
      { title: 'Facilities', href: '/facilities' }
    ] 
  },
  { 
    title: 'Departments', 
    href: '#', 
    dropdown: [
      { title: 'Computer Science & Engg', href: '/departments/cse' },
      { title: 'Electronics & Communication', href: '/departments/ece' },
      { title: 'Mechanical Engineering', href: '/departments/me' },
      { title: 'Civil Engineering', href: '/departments/civil' },
      { title: 'Electrical Engineering', href: '/departments/ee' }
    ] 
  },
  { title: 'Student Achievements', href: '/achievements' },
  { title: 'Examination', href: '/examination' },
  { title: 'Training & Placement', href: '/placement' },
  { title: 'Admission Cell', href: '/admission' },
  { title: 'Contact', href: '/contact' }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const toggleDropdown = (title: string) => {
    if (activeDropdown === title) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(title);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-college-blue text-white font-bold text-lg">
              SBCET
            </div>
            <div className={`hidden md:block ${scrolled ? 'text-college-navy' : 'text-college-blue'}`}>
              <h1 className="text-lg font-bold leading-tight">Sri Balaji College</h1>
              <p className="text-xs">of Engineering & Technology</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.title} className="relative group">
                {item.dropdown ? (
                  <button 
                    onClick={() => toggleDropdown(item.title)}
                    className={`nav-link flex items-center space-x-1 ${scrolled ? 'text-college-navy' : 'text-college-blue'}`}
                  >
                    <span>{item.title}</span>
                    <ChevronDown size={16} />
                  </button>
                ) : (
                  <Link 
                    to={item.href} 
                    className={`nav-link ${scrolled ? 'text-college-navy' : 'text-college-blue'}`}
                  >
                    {item.title}
                  </Link>
                )}

                {/* Dropdown */}
                {item.dropdown && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden transform opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 origin-top-left hidden group-hover:block z-50">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.title}
                        to={dropdownItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {dropdownItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden" 
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0'}`}>
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <div key={item.title} className="border-b border-gray-100 pb-2">
                {item.dropdown ? (
                  <div>
                    <button 
                      onClick={() => toggleDropdown(item.title)}
                      className="flex justify-between items-center w-full py-2 text-left"
                    >
                      <span>{item.title}</span>
                      <ChevronDown size={16} className={`transform transition-transform ${activeDropdown === item.title ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <div className={`pl-4 space-y-2 overflow-hidden transition-all duration-200 ${activeDropdown === item.title ? 'max-h-screen opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.title}
                          to={dropdownItem.href}
                          className="block py-1 text-sm text-gray-600 hover:text-college-blue"
                          onClick={toggleMenu}
                        >
                          {dropdownItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link 
                    to={item.href} 
                    className="block py-2 hover:text-college-blue"
                    onClick={toggleMenu}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
