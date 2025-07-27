import React from 'react';
import { motion } from 'framer-motion';
import { useImageLazyLoading } from '../hooks/useLazyLoading';

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+',
  ...props 
}) => {
  const { elementRef, imageSrc, isVisible } = useImageLazyLoading(src, {
    threshold: 0.1,
    rootMargin: '100px'
  });

  return (
    <motion.img
      ref={elementRef}
      src={imageSrc || placeholder}
      alt={alt}
      className={`transition-opacity duration-500 ${className} ${
        imageSrc ? 'opacity-100' : 'opacity-50'
      }`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ 
        opacity: imageSrc ? 1 : 0.5, 
        scale: imageSrc ? 1 : 0.95 
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      loading="lazy"
      {...props}
    />
  );
};

export default LazyImage; 