
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-6 text-college-blue">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="120" 
            height="120" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="mx-auto"
          >
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 8v4"/>
            <path d="M12 16h.01"/>
          </svg>
        </div>
        <h1 className="text-6xl font-bold text-college-blue mb-4">404</h1>
        <p className="text-2xl font-medium text-gray-700 mb-4">Page Not Found</p>
        <p className="text-gray-500 mb-8">
          We're sorry, the page you requested could not be found.
          <br />
          Please go back to the homepage.
        </p>
        <Link to="/">
          <Button className="btn-primary inline-flex items-center gap-2">
            <ArrowLeft size={16} />
            Return to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
