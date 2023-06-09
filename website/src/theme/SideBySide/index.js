import React from 'react';
import styles from './styles.module.css'


export default ({left, right}) => {
    return <div className={styles.row}>
    	<div className={styles.column}>
	        {left}
    	</div>
        <div className={styles.column}>
            {right}
        </div>
    </div>
}