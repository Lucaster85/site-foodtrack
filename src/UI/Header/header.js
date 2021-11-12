import * as React from 'react';

import * as styles from './header.module.scss';

import logo from '../../images/batman.png';

const Header = ({ siteTitle }) => (
  <header className={styles.headerSection}>
    <div className={styles.bar}>
      <div className={styles.logo}>
        <img src={logo} alt='Logo' />
      </div>
      <div className={styles.title}>
        <h1>{siteTitle}</h1>
      </div>
      <nav className={styles.nav}>
        <ol className={styles.menu}>
          <li className={styles.menuItem}><a href='#'>Home</a></li>
          <li className={styles.menuItem}><a href='#menu'>Menu</a></li>
          <li className={styles.menuItem}><a href='#galery'>Galery</a></li>
          <li className={styles.menuItem}><a href='#about'>About</a></li>
          <li className={styles.menuItem}><a href='#contact'>Contact</a></li>
        </ol>
      </nav>
    </div>
  </header>
)

export default Header;
