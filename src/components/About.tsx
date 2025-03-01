
import { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

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
    <section id="about" ref={aboutRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h6 className="text-college-blue font-medium mb-2 animate-on-scroll">ABOUT US</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">Our Legacy of Excellence</h2>
          <div className="w-20 h-1 bg-college-accent mx-auto animate-on-scroll"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-gray-700 mb-6 animate-on-scroll">
              Sri Balaji College of Engineering & Technology, Jaipur is one of the pioneer Engineering & Technology
              institution. Late Prof. Arun Singh, a renowned academician, scientist and consultant, has been associated
              with this Engineering College of Engineering & Technology since its inception till his last breath.
            </p>
            <p className="text-gray-700 mb-6 animate-on-scroll">
              Sri Balaji College of Engineering & Technology has been established in the year 2000 with due approval by All India Council for
              Technical Education (AICTE), New Delhi and affiliation to Rajasthan Technical University, Jaipur.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-2 animate-on-scroll">
                <CheckCircle className="text-college-blue h-5 w-5 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">AICTE Approved</h4>
                  <p className="text-sm text-gray-600">Recognized by AICTE, New Delhi</p>
                </div>
              </div>
              <div className="flex items-start gap-2 animate-on-scroll">
                <CheckCircle className="text-college-blue h-5 w-5 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">RTU Affiliated</h4>
                  <p className="text-sm text-gray-600">Affiliated to Rajasthan Technical University</p>
                </div>
              </div>
              <div className="flex items-start gap-2 animate-on-scroll">
                <CheckCircle className="text-college-blue h-5 w-5 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Expert Faculty</h4>
                  <p className="text-sm text-gray-600">Experienced teaching professionals</p>
                </div>
              </div>
              <div className="flex items-start gap-2 animate-on-scroll">
                <CheckCircle className="text-college-blue h-5 w-5 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">State-of-Art Labs</h4>
                  <p className="text-sm text-gray-600">Modern laboratories and equipment</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-on-scroll">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80" 
                  alt="College Campus" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 w-32 h-32 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-college-blue">24+</span>
                <span className="text-sm text-gray-600 text-center">Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
