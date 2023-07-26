import React from 'react';
import styles from './styles.module.css'


export default ({image, name}) => {
    return <div className={styles.piccenter}>
        <img src={image} alt={name} />
        </div>
}
