
import { Library, School, Home, Wifi, Dumbbell, Laptop } from 'lucide-react';
import { useEffect } from 'react';

interface Facility {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const facilities: Facility[] = [
  {
    title: 'Library',
    description: 'Rich and spacious library with a vast collection of books, journals, and digital resources.',
    icon: <Library className="h-6 w-6 text-college-blue" />
  },
  {
    title: 'Laboratories',
    description: 'State-of-the-art laboratories equipped with modern equipment and technology.',
    icon: <School className="h-6 w-6 text-college-blue" />
  },
  {
    title: 'Hostel',
    description: 'Separate hostels for boys and girls with modern amenities and 24/7 security.',
    icon: <Home className="h-6 w-6 text-college-blue" />
  },
  {
    title: 'Wi-Fi Campus',
    description: 'High-speed internet connectivity throughout the campus for students and faculty.',
    icon: <Wifi className="h-6 w-6 text-college-blue" />
  },
  {
    title: 'Sports',
    description: 'Well-equipped sports facilities for indoor and outdoor games, including a gymnasium.',
    icon: <Dumbbell className="h-6 w-6 text-college-blue" />
  },
  {
    title: 'Virtual Labs',
    description: 'Remote access to labs in various disciplines of Science and Engineering.',
    icon: <Laptop className="h-6 w-6 text-college-blue" />
  }
];

const Facilities = () => {
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h6 className="text-college-blue font-medium mb-2 animate-on-scroll">CAMPUS AMENITIES</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">Our Facilities</h2>
          <div className="w-20 h-1 bg-college-accent mx-auto mb-6 animate-on-scroll"></div>
          <p className="max-w-2xl mx-auto text-gray-700 animate-on-scroll">
            We provide world-class facilities to ensure a conducive learning environment and comfortable stay for our students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 animate-on-scroll card-hover"
            >
              <div className="mb-4 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                {facility.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{facility.title}</h3>
              <p className="text-gray-600">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
