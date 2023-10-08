import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const Goods = ({price, title}) => {
    return (
        <div className={styles.wrapper}>
            {title} ............ <span>{price} ₽</span>
        </div>
    );
};

Goods.propTypes = {
    price: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Goods;
