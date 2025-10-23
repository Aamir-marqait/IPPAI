"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface OptimizedImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  fallback?: string;
  enableLazyLoading?: boolean;
}

export function OptimizedImage({ 
  src, 
  alt, 
  fallback,
  enableLazyLoading = true,
  placeholder = "blur",
  blurDataURL,
  loading,
  ...props 
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    if (fallback) {
      setImgSrc(fallback);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  // Convert .png/.jpg to .webp for optimized images
  const optimizedSrc = imgSrc.startsWith('/home/') 
    ? imgSrc.replace('/home/', '/optimized/').replace(/\.(png|jpg|jpeg)$/i, '.webp')
    : imgSrc;

  const defaultBlurDataURL = blurDataURL || 
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAhEQACAQIHAQAAAAAAAAAAAAABAgADBAUREiExQVFhkf/aAAwDAQACEQMRAD8A0NbfH2oo2+PlHZ7L93eMuUgPCDkMB74P/9k=";

  return (
    <Image
      {...props}
      src={optimizedSrc}
      alt={alt}
      onError={handleError}
      onLoad={handleLoad}
      loading={enableLazyLoading ? (loading || "lazy") : "eager"}
      placeholder={placeholder}
      blurDataURL={defaultBlurDataURL}
      className={`${props.className || ""} ${isLoading ? "blur-sm" : "blur-0"} transition-all duration-300`}
    />
  );
}