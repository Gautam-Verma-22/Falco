import { useState, useEffect, useRef } from 'react';

export const useLazyLoading = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const elementRef = useRef(null);

  const {
    threshold = 0.1,
    rootMargin = '50px',
    triggerOnce = true
  } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return {
    elementRef,
    isVisible,
    isLoaded,
    handleLoad
  };
};

export const useImageLazyLoading = (src, options = {}) => {
  const [imageSrc, setImageSrc] = useState(null);
  const { isVisible, elementRef } = useLazyLoading(options);

  useEffect(() => {
    if (isVisible && src) {
      setImageSrc(src);
    }
  }, [isVisible, src]);

  return {
    elementRef,
    imageSrc,
    isVisible
  };
}; 