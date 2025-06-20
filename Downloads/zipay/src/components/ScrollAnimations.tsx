import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'bounce-in' | 'scale-in';
  delay?: number;
}

export const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  className = '',
  animationType = 'fade-up',
  delay = 0
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
              if (entry.target) {
                entry.target.classList.add('animate-in');
                entry.target.classList.remove('animate-out');
              }
            }, delay);
          } else {
            // When element goes out of view, reset for re-animation
            setIsVisible(false);
            if (entry.target) {
              entry.target.classList.remove('animate-in');
              entry.target.classList.add('animate-out');
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [animationType, delay]);

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-700 ease-out';
    
    if (!isVisible) {
      switch (animationType) {
        case 'fade-up':
          return `${baseClasses} opacity-0 translate-y-8`;
        case 'fade-down':
          return `${baseClasses} opacity-0 -translate-y-8`;
        case 'fade-left':
          return `${baseClasses} opacity-0 translate-x-8`;
        case 'fade-right':
          return `${baseClasses} opacity-0 -translate-x-8`;
        case 'bounce-in':
          return `${baseClasses} opacity-0 scale-75`;
        case 'scale-in':
          return `${baseClasses} opacity-0 scale-90`;
        default:
          return `${baseClasses} opacity-0 translate-y-8`;
      }
    }
    
    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  return (
    <div ref={elementRef} className={`${getAnimationClasses()} ${className}`}>
      {children}
    </div>
  );
};

export default ScrollAnimation;