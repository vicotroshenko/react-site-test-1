import React from 'react';

import { footer as contains } from '../../assets/data';
import { ReactComponent as FacebookIcon } from '../../assets/images/svg/Facebook.svg';
import { ReactComponent as InstagramIcon } from '../../assets/images/svg/Instagram.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/images/svg/LinkedIn.svg';
import styles from './Footer.module.css';
import LinkItem from './LinkItem/LinkItem.component';

const telegramLink = `https://t.me/otroshenko27`;
const viberLink = `viber://pa?chatURI=<sales>`;

const Footer = () => {
  const {
    links: { address, phone, contacts },
  } = contains;

  const contactsNames = Object.keys(contacts.details);
  const getLinkByContact = (contact: string, link: string) => {
    const linksName = contactsNames.reduce(
      (acc, item) => ({ ...acc, [item]: item }),
      {}
    ) as { [x: string]: string };

    let fullLink: string = '';
    fullLink = contact === linksName.email ? `mailto: ${link}` : fullLink;
    fullLink = contact === linksName.telegram ? telegramLink : fullLink;
    fullLink = contact === linksName.viber ? viberLink : fullLink;
    return fullLink;
  };
  return (
    <footer
      className={styles.footer}
      id="CONTACTS"
    >
      <div className={styles.container}>
        <div className={styles.footer_top}>
          <div>
            <a
              href="/"
              className={styles.logo}
            >
              {contains.logo}
            </a>
            <p className={styles.subtitle}>{contains.subtitle}</p>
          </div>
          <div className={styles.links_wrapper}>
            <LinkItem title={address.title}>
              {address.details.map((link: string) => (
                <li key={link}>
                  <a
                    href="https://www.google.com/maps/place//@50.4463049,30.4418138,230m"
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </LinkItem>
            <LinkItem title={phone.title}>
              {phone.details.map((link: string) => (
                <li key={link}>
                  <a
                    href={`tel:${link}`}
                    className={styles.link}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </LinkItem>
            <LinkItem title={contacts.title}>
              {Object.values(contacts.details).map((link: string, index) => (
                <li key={index}>
                  {' '}
                  {contactsNames[index] + ': '}
                  <a
                    href={getLinkByContact(contactsNames[index], link)}
                    className={styles.link}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </LinkItem>
          </div>
        </div>
        <div className={styles.footer_bottom}>
          <p>{contains.bottom_text}</p>
          <div className={styles.media}>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <LinkedinIcon />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
