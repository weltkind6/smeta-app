import React from 'react';
import styles from './styles.module.css';

const ProductCard = ({icon: Icon, name, price}) => {
    return (
        <div className={styles.wrapper}>
            <Icon/>
            <div>Изделие: {name}</div>
            <div>{price} ₽</div>
        </div>
    );
};

export default ProductCard;
