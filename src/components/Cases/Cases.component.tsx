import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

import { cases as contains } from '../../assets/data';
import { SwiperButton } from '../../constants';
import Container from '../Container/Container.component';
import styles from './Cases.module.css';
import './CustomScrollbar.css';
import SwiperCard from './SwiperCard/SwiperCard.component';

const Cases = () => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const onChangeSlideClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;
    name === SwiperButton.NEXT && swiper?.slideNext();
    name === SwiperButton.PREV && swiper?.slidePrev();
  };
  return (
    <Container
      name={contains.name}
      title={contains.title}
      subtitle={contains.text}
      id="CASES"
    >
      <div>
        <Swiper
          spaceBetween={24}
          slidesPerView={1.1}
          scrollbar={{
            draggable: true,
          }}
          modules={[Scrollbar]}
          onSwiper={(swiper: SwiperClass) => setSwiper(swiper)}
          wrapperTag="ul"
          allowTouchMove={false}
          className={styles.slider}
        >
          {contains.cards.map((card, index) => (
            <SwiperSlide
              key={index}
              tag="li"
            >
              <SwiperCard
                cards={card}
                onChangeSlideClick={onChangeSlideClick}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default Cases;
