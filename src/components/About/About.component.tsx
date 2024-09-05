import React from 'react';

import aboutImage1 from '../../assets/images/jpg/about-desctop.jpg';
import aboutImage2 from '../../assets/images/png/employee.png';
import contains from '../../assets/json/about.json';
import Container from '../Container/Container.component';
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
          <img
            src={aboutImage1}
            alt="keyboard and mouse"
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
          <img
            src={aboutImage2}
            alt="employee"
          />
        </li>
      </ul>
    </Container>
  );
};

export default About;
