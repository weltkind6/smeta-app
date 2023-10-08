import React from 'react';
import styles from './styles.module.css'
import PropTypes from "prop-types";

const ButtonMain = ({isDiscount, discount}) => {

    return (
        <div className={styles.wrapper}>
            <div>Добавить к заказу</div>
            {!isDiscount ? <div>Бесплатно</div> : <div>Со скидкой {discount}%</div>}
        </div>
    );
};

ButtonMain.propTypes = {
    isDiscount: PropTypes.bool.isRequired,
    discount: PropTypes.string
}

export default ButtonMain;
