import React from "react";

interface ImageProps {
  src: string;
  className?: string;
  alt?: string;
}

const Image: React.FC<ImageProps> = ({ src, className, alt = "Image" }) => {
  return <img src={src} className={className} alt={alt} />;
};

export default Image;