import React from 'react';

import { ReactComponent as ArrowIcon } from '../../../assets/images/svg/arrow.svg';
import { SwiperButton } from '../../../constants';
import ButtonsStyle from '../../../constants/button-style.constant';
import CustomButton from '../../CustomButton/CustomButton.component';
import CardImage from '../CardImage/CardImage.component';
import styles from './SwiperCard.module.css';

interface CardProps {
  cards: {
    title: string;
    list: string[];
    image1: string;
    image1_2x: string;
    image2: string;
    image2_2x: string;
  };
  onChangeSlideClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const SwiperCard: React.FC<CardProps> = ({ cards, onChangeSlideClick }) => {
  return (
    <div className={styles.card}>
      <div className={styles.buttons_wrapper}>
        <CustomButton
          variant={ButtonsStyle.slider_left}
          name={SwiperButton.PREV}
          onClick={onChangeSlideClick}
        >
          <ArrowIcon />
        </CustomButton>
        <CustomButton
          variant={ButtonsStyle.slider_right}
          name={SwiperButton.NEXT}
          onClick={onChangeSlideClick}
        >
          <ArrowIcon />
        </CustomButton>
      </div>
      <div className={styles.card_images_container}>
        <CardImage
          image={cards.image1}
          image2x={cards.image1_2x}
          alt="mackbook"
        />
        <div className={styles.mobile_hidden}>
          <CardImage
            image={cards.image2}
            image2x={cards.image2_2x}
            alt="mackbook"
          />
        </div>
      </div>
      <div className={styles.card_bottom}>
        <h3>{cards.title}</h3>
        <ul className={styles.card_list}>
          {cards.list.map((card) => (
            <li key={card}>{card}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SwiperCard;
