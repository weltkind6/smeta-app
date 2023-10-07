import React from 'react';
import styles from './styles.module.css';

const ProductCard = ({icon: Icon, name, price}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.product}>
                <span><Icon /></span>
                <span>Изделие: {name}</span>
            </div>
            <div>{price} ₽</div>
        </div>
    );
};

export default ProductCard;
