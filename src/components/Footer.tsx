import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-college-navy text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* College Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-college-blue font-bold text-sm">
                SBCET
              </div>
              <div>
                <h3 className="font-bold leading-tight">Sri Balaji College</h3>
                <p className="text-xs text-white/80">of Engineering & Technology</p>
              </div>
            </div>
            <p className="text-white/80 mb-6">
              Pioneering excellence in engineering education since 2000, shaping future innovators and leaders.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-college-accent after:left-0 after:-bottom-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/departments" className="text-white/80 hover:text-white transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  Departments
                </Link>
              </li>
              <li>
                <Link to="/admission" className="text-white/80 hover:text-white transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  Admission
                </Link>
              </li>
              <li>
                <Link to="/placement" className="text-white/80 hover:text-white transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  Training & Placement
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="text-white/80 hover:text-white transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  Facilities
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Other Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-college-accent after:left-0 after:-bottom-2">
              Important Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/aicte-approvals" className="text-white/80 hover:text-white transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  AICTE Approvals
                </Link>
              </li>
              <li>
                <Link to="/rtu-affiliations" className="text-white/80 hover:text-white transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  RTU Affiliations
                </Link>
              </li>
              <li>
                <Link to="/mandatory-disclosures" className="text-white/80 hover:text-white transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  Mandatory Disclosures
                </Link>
              </li>
              <li>
                <Link to="/grievance" className="text-white/80 hover:text-white transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  Grievance Redressal
                </Link>
              </li>
              <li>
                <Link to="/committees" className="text-white/80 hover:text-white transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  Committees
                </Link>
              </li>
              <li>
                <Link to="/nirf" className="text-white/80 hover:text-white transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  NIRF
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-college-accent after:left-0 after:-bottom-2">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-college-accent mt-1 flex-shrink-0" />
                <span className="text-white/80">
                  Sri Balaji College of Engineering & Technology,<br />
                  Jaipur-Delhi National Highway,<br />
                  Jaipur, Rajasthan - 302001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-college-accent flex-shrink-0" />
                <a href="tel:+911412356781" className="text-white/80 hover:text-white transition-colors">
                  +91 141 235 6781
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-college-accent flex-shrink-0" />
                <a href="mailto:info@sbcet.ac.in" className="text-white/80 hover:text-white transition-colors">
                  info@sbcet.ac.in
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6">
          <div className="text-center text-white/70 text-sm">
            <p>Copyright © {currentYear} Sri Balaji Shiksha Samiti, Jaipur | Web Mail</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
