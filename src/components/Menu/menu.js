import React from 'react';

import * as styles from './menu.module.scss';

import image from '../../images/Menu/imagenPlatoTest.jpg';
import CardMenu from './cardMenu';

const MenuSection = () => {
    return(
        <div id='menu' className={styles.menuSection}>
            <CardMenu 
                imgSrc={image}
                header='Cabecera primera'
                title='Primer título'
                description='Una descripción del producto iria acá con bastantes palabras, Una descripción del producto iria acá con bastantes palabras, Una descripción del producto'
                items={['Item nro 1', 'Item nro 2', 'Item nro 3',]}
                />
            <CardMenu 
                imgSrc={image}
                header='Cabecera Segunda'
                title='Segunda título'
                description='Una descripción del segundo producto iria acá con bastantes palabras, Una descripción del producto iria acá con bastantes palabras'
                items={['Item nro 1', 'Item nro 2', 'Item nro 3',]}
                />
            <CardMenu
                imgSrc={image}
                header='Cabecera tercera'
                title='Tercer título'
                description='Una descripción del tercer producto iria acá con bastantes palabras, Una descripción del producto iria acá con bastantes palabras, Una descripción del producto'
                items={['Item nro 1', 'Item nro 2', 'Item nro 3',]}
                />
        </div>
    );
}

export default MenuSection;