import React from 'react';

import { about as contains } from '../../assets/data';
import Container from '../Container/Container.component';
import Image from '../Image/Image.component';
import styles from './About.module.css';
import AboutItem from './AboutItem/AboutItem.component';

const About = () => {
  return (
    <Container
      id="ABOUT"
      name={contains.name}
      title={contains.title}
      subtitle={contains.text}
    >
      <ul className={styles.about_list}>
        <li>
          <Image
            desktopImage={contains.images.image1}
            desktopImage2x={contains.images.image1_2x}
            mobileImage={contains.images.image1}
            mobileImage2x={contains.images.image1_2x}
            alt="keyboard"
          />
        </li>
        {contains.statistic.map((item) => (
          <AboutItem
            quantity={item.number}
            name={item.name}
            key={item.number}
          />
        ))}
        <li style={{ background: 'red' }}>
          <Image
            desktopImage={contains.images.image2}
            desktopImage2x={contains.images.image2_2x}
            mobileImage={contains.images.image2}
            mobileImage2x={contains.images.image2_2x}
            alt="employee"
          />
        </li>
      </ul>
    </Container>
  );
};

export default About;
