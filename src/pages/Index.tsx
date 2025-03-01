
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Departments from '@/components/Departments';
import Facilities from '@/components/Facilities';
import NewsEvents from '@/components/NewsEvents';
import FeePayment from '@/components/FeePayment';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Initialize animation observer
    const initAnimations = () => {
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
    };

    // Smooth scroll functionality
    const handleSmoothScroll = () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          if (targetId && targetId !== '#') {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
              targetElement.scrollIntoView({
                behavior: 'smooth'
              });
            }
          }
        });
      });
    };

    initAnimations();
    handleSmoothScroll();

    // Clean up event listeners
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Departments />
      <Facilities />
      <NewsEvents />
      <FeePayment />
      <Footer />
    </div>
  );
};

export default Index;
