
// Function to initialize animations for elements with the 'animate-on-scroll' class
export const initScrollAnimations = () => {
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

// Function to handle smooth scrolling for anchor links
export const setupSmoothScroll = () => {
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

  return () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.removeEventListener('click', () => {});
    });
  };
};
