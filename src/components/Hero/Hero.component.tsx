import React from 'react';

import { hero as contains } from '../../assets/data';
import Header from './Header/Header.component';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <Header
          nav={contains.nav}
          logo={contains.logo}
          buttonName={contains.button}
        />
        <div className={styles.title_container}>
          <h1>{contains.title}</h1>
          <p>{contains.subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
