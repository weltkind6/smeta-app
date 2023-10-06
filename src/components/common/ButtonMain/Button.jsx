import React from 'react';
import './styles.css'

const Button = ({discount}) => {
    return (
        <div className="orderBtn">
            <div>Добавить к заказу</div>
            <div>{discount}</div>
        </div>
    );
};

export default Button;
