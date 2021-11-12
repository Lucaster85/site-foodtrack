import React from 'react';

import * as styles from './footer.module.scss';

import logo from '../../images/batman.png';

const Footer = () => {
    return (
        <footer className={styles.footer}>
          <div className={styles.main}>
            <div className={styles.logo}>
              <img src={logo} alt='Logo' />
            </div>
            <ol className={styles.lowerMenu}>
              <li className={styles.menuItem}>Item nro 1</li>
              <li className={styles.menuItem}>Item nro 2</li>
              <li className={styles.menuItem}>Item nro 3</li>
              <li className={styles.menuItem}>Item nro 4</li>
            </ol>
            <ol className={styles.social}>
              <li className={styles.socialTitle}>Contact us on</li>
              <li className={styles.socialItem}>Facebook</li>
              <li className={styles.socialItem}>Wasap</li>
              <li className={styles.socialItem}>Instagram</li>
            </ol>
          </div>
          <div className={styles.copyright}>
            © {new Date().getFullYear()}, Created by Lucaster.
          </div>
        </footer>
    );
}

export default Footer;