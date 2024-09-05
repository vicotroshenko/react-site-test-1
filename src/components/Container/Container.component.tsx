import clsx from 'clsx';
import React, { ReactNode } from 'react';

import { ReactComponent as TitleArrowIcon } from '../../assets/images/svg/title_arrow.svg';
import styles from './Container.module.css';

enum Id {
  ABOUT = 'about',
  CASES = 'cases',
}

interface ContainerProps {
  name: string;
  title: string;
  subtitle: string;
  id: keyof typeof Id;
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({
  name,
  title,
  subtitle,
  id,
  children,
}) => {
  const isAbout = Boolean(Id[id] === Id.ABOUT);
  return (
    <section
      id={id}
      className={styles.section}
    >
      <div className={styles.container}>
        <div className={styles.title_container}>
          <div className={styles.section_name}>
            <TitleArrowIcon />
            <h3>{name}</h3>
          </div>
          <h2
            className={clsx({
              [styles.title_about]: isAbout,
            })}
          >
            {title}
          </h2>
          <p
            className={clsx(styles.subtitle, {
              [styles.subtitle_about]: isAbout,
            })}
          >
            {subtitle}
          </p>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Container;
