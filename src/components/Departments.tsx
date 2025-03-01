
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

interface Department {
  title: string;
  icon: string;
  description: string;
  link: string;
}

const departments: Department[] = [
  {
    title: 'Computer Science & Engineering',
    icon: '💻',
    description: 'Study of computation, algorithms, programming languages, and computer systems design.',
    link: '/departments/cse'
  },
  {
    title: 'Electronics & Communication',
    icon: '📡',
    description: 'Study of electronic devices, circuits, communication equipment and systems.',
    link: '/departments/ece'
  },
  {
    title: 'Mechanical Engineering',
    icon: '⚙️',
    description: 'Study of mechanical systems, thermodynamics, mechanics, and materials science.',
    link: '/departments/me'
  },
  {
    title: 'Civil Engineering',
    icon: '🏗️',
    description: 'Study of planning, designing, constructing, and maintaining infrastructure.',
    link: '/departments/civil'
  },
  {
    title: 'Electrical Engineering',
    icon: '⚡',
    description: 'Study of electricity, electronics, and electromagnetism for practical applications.',
    link: '/departments/ee'
  },
  {
    title: 'Master of Computer Applications',
    icon: '🖥️',
    description: 'Advanced study in computer applications and software development.',
    link: '/departments/mca'
  }
];

const Departments = () => {
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h6 className="text-college-blue font-medium mb-2 animate-on-scroll">ACADEMIC PROGRAMS</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">Our Departments</h2>
          <div className="w-20 h-1 bg-college-accent mx-auto mb-6 animate-on-scroll"></div>
          <p className="max-w-2xl mx-auto text-gray-700 animate-on-scroll">
            We offer a wide range of undergraduate and postgraduate programs to prepare students for successful careers in various engineering disciplines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden animate-on-scroll card-hover"
            >
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                  <span className="text-2xl" aria-hidden="true">{dept.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{dept.title}</h3>
                <p className="text-gray-600 mb-6">{dept.description}</p>
                <Button variant="ghost" className="text-college-blue hover:text-college-navy p-0 flex items-center gap-2 group">
                  Learn More 
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10 animate-on-scroll">
          <Button className="btn-primary">
            View All Programs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Departments;
