import React from 'react';

interface ImageProps {
  desktopImage: string;
  desktopImage2x: string;
  mobileImage: string;
  mobileImage2x: string;
  alt: string;
}
const Image: React.FC<ImageProps> = ({
  desktopImage,
  desktopImage2x,
  mobileImage,
  mobileImage2x,
  alt,
}) => {
  return (
    <picture>
      <source
        srcSet={`${desktopImage} 1x, ${desktopImage2x} 2x`}
        media="(min-width: 1440px)"
      />
      <source
        srcSet={`${mobileImage} 1x, ${mobileImage2x} 2x`}
        media="(max-width: 1429px)"
      />
      <img
        src={mobileImage}
        alt={alt}
        loading="lazy"
      />
    </picture>
  );
};

export default Image;
