import { ReactNode, CSSProperties } from 'react';
import { useIntersection } from '@/hooks/use-intersection';
import { cn } from '@/lib/utils';

type AnimationType = 'fade-up' | 'fade-left' | 'fade-right' | 'scale-in' | 'fade-in';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  threshold?: number;
}

export function AnimatedSection({
  children,
  animation = 'fade-up',
  delay = 0,
  className,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const [ref, isVisible] = useIntersection({ threshold });

  const animationClasses: Record<AnimationType, string> = {
    'fade-up': 'scroll-fade-in',
    'fade-left': 'scroll-fade-left',
    'fade-right': 'scroll-fade-right',
    'scale-in': 'scroll-scale-in',
    'fade-in': 'scroll-fade-only',
  };

  const style: CSSProperties = delay > 0 ? { transitionDelay: `${delay}ms` } : {};

  return (
    <div
      ref={ref}
      className={cn(animationClasses[animation], isVisible && 'visible', className)}
      style={style}
    >
      {children}
    </div>
  );
}

// Staggered children wrapper for lists
interface AnimatedListProps {
  children: ReactNode[];
  animation?: AnimationType;
  staggerDelay?: number;
  className?: string;
  itemClassName?: string;
}

export function AnimatedList({
  children,
  animation = 'fade-up',
  staggerDelay = 100,
  className,
  itemClassName,
}: AnimatedListProps) {
  const [ref, isVisible] = useIntersection({ threshold: 0.1 });

  const animationClasses: Record<AnimationType, string> = {
    'fade-up': 'scroll-fade-in',
    'fade-left': 'scroll-fade-left',
    'fade-right': 'scroll-fade-right',
    'scale-in': 'scroll-scale-in',
    'fade-in': 'scroll-fade-only',
  };

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className={cn(animationClasses[animation], isVisible && 'visible', itemClassName)}
          style={{ transitionDelay: `${index * staggerDelay}ms` }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
