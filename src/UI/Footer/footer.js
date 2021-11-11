import React from 'react';

import * as styles from './footer.module.scss';

const Footer = () => {
    return (
        <footer>
          © {new Date().getFullYear()}, Built with
        </footer>
    );
}

export default Footer;