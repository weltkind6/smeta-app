import React, {useState} from 'react';
import styles from './styles.module.css'
import PropTypes from "prop-types";
import classnames from "classnames";

const ButtonMain = ({isDiscount, discount}) => {
    const [isClicked, setIsClicked] = useState(false);
    const wrapperClassName = classnames(styles.wrapper, {
        [styles.wrapper2]: isClicked,
    });

    return (
        <div className={wrapperClassName} onClick={() => setIsClicked(!isClicked)}>
            {isClicked ?
                <h5>Добавлено к заказу</h5>
                :
                <div>
                    <div className={styles.title}>Добавить к заказу</div>
                    {!isDiscount ? <div>Бесплатно</div> : <div>Со скидкой {discount}%</div>}
                </div>
            }
        </div>
    );
};

ButtonMain.propTypes = {
    isDiscount: PropTypes.bool.isRequired,
    discount: PropTypes.string
}

export default ButtonMain;
