import React from 'react';

import * as styles from './cardMenu.module.scss';

const CardMenu = (props) => {

    let items = props.items.map((e, i) => {
        return <li className={styles.listItem} key={i}>{e}</li>
        
    })
    return(
        <div className={styles.cardMenu}>
            <div className={styles.imageContainer}>
                <img src={props.imgSrc} alt='Imagen plato de comida'></img>
            </div>
            <div className={styles.textBox}>
                <h3 className={styles.header}>{props.header}</h3>
                <h2 className={styles.title}>{props.title}</h2>
                <p className={styles.description}>{props.description}</p>
                <ol className={styles.list}>
                    {items}
                </ol>
            </div>
        </div>
    );
}

export default CardMenu;