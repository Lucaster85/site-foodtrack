import * as React from 'react';

import * as styles from './header.module.scss';

import logo from '../../images/iconoCamion.png';

const Header = ({ siteTitle }) => (
  <header className={styles.headerSection}>
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src={logo} alt='' />
      </div>
      <div className={styles.title}>
        <h1>{siteTitle}</h1>
      </div>
      <ol className={styles.menu}>
        <li className={styles.menuItem}>Home</li>
        <li className={styles.menuItem}>About</li>
        <li className={styles.menuItem}>Menus</li>
        <li className={styles.menuItem}>Contact</li>
      </ol>
    </nav>
  </header>
)

export default Header;
