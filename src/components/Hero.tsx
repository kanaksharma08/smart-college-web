
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const images = [
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80',
  'https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80',
  'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80'
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Slider */}
      {images.map((image, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Content */}
      <div className="relative h-full flex items-center justify-center z-10">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm animate-fade-in">
            <span className="text-white/90 text-sm font-medium">
              AICTE Approved | RTU Affiliated
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in tracking-tight">
            Sri Balaji College of<br />Engineering & Technology
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg animate-fade-in">
            Pioneering excellence in engineering education since 2000,
            shaping future innovators and leaders
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
            <Button className="btn-primary w-full sm:w-auto flex items-center gap-2 bg-white text-college-blue hover:bg-white/90">
              Explore Programs <ArrowRight size={16} />
            </Button>
            <Button variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-white/10">
              Admission Enquiry
            </Button>
          </div>
          
          {/* Slider Indicators */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'w-8 bg-white' : 'w-2 bg-white/50'}`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
