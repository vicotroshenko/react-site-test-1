import React, { memo } from 'react';

import Image from '../../Image/Image.component';
import styles from './CardImage.module.css';

interface CardImageProps {
  image: string;
  image2x: string;
  alt: string;
}
const CardImage: React.FC<CardImageProps> = memo(({ image, image2x, alt }) => {
  return (
    <div className={styles.card}>
      <Image
        desktopImage={image}
        desktopImage2x={image2x}
        mobileImage={image}
        mobileImage2x={image2x}
        alt={alt}
      />
    </div>
  );
});

export default CardImage;
