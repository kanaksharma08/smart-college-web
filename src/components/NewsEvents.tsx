
import { useEffect } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Event {
  title: string;
  date: string;
  description: string;
  category: 'workshop' | 'event' | 'notice';
}

const events: Event[] = [
  {
    title: 'International Conference ICCSSM - 2025',
    date: 'May 14-17, 2025',
    description: 'International Conference on Computational Science and Smart Materials.',
    category: 'event'
  },
  {
    title: 'MANTHAN - 2024 (ANNUAL FEST)',
    date: 'April 5-7, 2024',
    description: 'Annual technical and cultural festival of the college.',
    category: 'event'
  },
  {
    title: 'Blockchain Technology and Its Applications',
    date: 'Jan 25-29, 2024',
    description: 'Workshop on blockchain technology and its real-world applications.',
    category: 'workshop'
  },
  {
    title: 'Examination Notices',
    date: 'Feb 15, 2024',
    description: 'Important information regarding upcoming semester examinations.',
    category: 'notice'
  }
];

const NewsEvents = () => {
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

  const getCategoryColor = (category: Event['category']) => {
    switch (category) {
      case 'event': return 'bg-green-100 text-green-800';
      case 'workshop': return 'bg-blue-100 text-blue-800';
      case 'notice': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryName = (category: Event['category']) => {
    switch (category) {
      case 'event': return 'Event';
      case 'workshop': return 'Workshop';
      case 'notice': return 'Notice';
      default: return 'Other';
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h6 className="text-college-blue font-medium mb-2 animate-on-scroll">STAY UPDATED</h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">News & Events</h2>
          <div className="w-20 h-1 bg-college-accent mx-auto mb-6 animate-on-scroll"></div>
          <p className="max-w-2xl mx-auto text-gray-700 animate-on-scroll">
            Stay informed about the latest happenings, events, workshops, and important notices at our college.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden animate-on-scroll card-hover"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}>
                    {getCategoryName(event.category)}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={14} className="mr-1" />
                    <span>{event.date}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                <Button variant="ghost" className="text-college-blue hover:text-college-navy p-0 flex items-center gap-2 group">
                  Read More
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 animate-on-scroll">
          <Button className="btn-primary">
            View All News & Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
