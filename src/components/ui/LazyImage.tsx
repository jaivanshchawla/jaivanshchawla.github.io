"use client";

import React, { useState } from "react";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, ...props }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <img
      {...props}
      src={!hasError ? src : src} // fallback to same image
      alt={alt}
      loading="lazy"
      onError={() => setHasError(true)}
    />
  );
};

export default LazyImage;
