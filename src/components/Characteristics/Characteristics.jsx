import React from 'react';
import styles from './styles.module.css'

const Characteristics = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.characteristics}>
                <span>Характеристики</span>
                <span>Okonti Lumo; 2830×2882</span>
            </div>
            <div className={styles.characteristics}>
                <span>Количество</span>
                <span>3</span>
            </div>
            <div className={styles.description}>
                <div className={styles.item}>
                    <div>
                        <span className={styles.itemName}>Тип изделия:</span>
                    </div>
                    <div>
                        <span className={styles.itemParams}>Окно</span>
                    </div>
                </div>
                <div className={styles.item}>
                    <div>
                        <span className={styles.itemName}>Профильная система:</span>
                    </div>
                    <div>
                        <span className={styles.itemParams}>Okonti Bravo</span>
                    </div>
                </div>
                <div className={styles.item}>
                    <div>
                        <span className={styles.itemName}>Фурнитура:</span>
                    </div>
                    <div>
                        <span className={styles.itemParams}>Siegenia Titan AF</span>
                    </div>
                </div>
                <div className={styles.item}>
                    <div>
                        <span className={styles.itemName}>Цвет изделия внешний:</span>
                    </div>
                    <div>
                        <span className={styles.itemParams}>Белый</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Characteristics;
