
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { CreditCard } from 'lucide-react';

const FeePayment = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="bg-college-blue text-white p-8 lg:w-1/2 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4 animate-on-scroll">Online Fee Payment</h3>
              <p className="mb-6 animate-on-scroll">
                Pay your college fees securely online using our payment gateway. Convenient, fast, and secure.
              </p>
              <div className="flex items-start space-x-4 mb-4 animate-on-scroll">
                <div className="mt-1">
                  <CreditCard className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-medium">Multiple Payment Options</h4>
                  <p className="text-sm text-white/80">Credit/Debit Cards, Net Banking, UPI, etc.</p>
                </div>
              </div>
              <Button className="mt-6 w-full sm:w-auto bg-white text-college-blue hover:bg-white/90 animate-on-scroll">
                Payment Guidelines
              </Button>
            </div>
            <div className="p-8 lg:w-1/2 flex flex-col justify-center">
              <h4 className="text-xl font-semibold mb-6 animate-on-scroll">Scan to make a Fee Payment</h4>
              <div className="flex justify-center mb-6 animate-on-scroll">
                <div className="bg-white p-3 rounded-lg shadow-md">
                  <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://example.com/payment" 
                    alt="Payment QR Code" 
                    className="w-40 h-40"
                  />
                </div>
              </div>
              <div className="text-center mb-6 animate-on-scroll">
                <p className="text-sm text-gray-500">Or click the button below</p>
              </div>
              <Button className="w-full btn-primary animate-on-scroll">
                Pay Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeePayment;
