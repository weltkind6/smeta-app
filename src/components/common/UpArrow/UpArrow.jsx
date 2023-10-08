import React from 'react';
import arrow from '../../../img/svg/arrow-up.svg'
import styles from './styles.module.css';

const UpArrow = () => {
    return (
        <div className={styles.wrapper}>
            <img src={arrow} alt="arrow-up"/>
        </div>
    );
};

export default UpArrow;
