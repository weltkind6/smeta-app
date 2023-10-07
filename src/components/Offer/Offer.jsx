import React from 'react';
import styles from './styles.module.css'
import ProductCard from "../common/ProductCard/ProductCard";
import {ReactComponent as PlusButton} from "../../img/svg/add.svg";
import {ReactComponent as DelButton} from "../../img/svg/delete.svg";

const Offer = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.estimate}>
                <div>Смета № 533001122</div>
                <div>Предварительный расчёт стоимости</div>
                <div>Lorem ipsum dolor sit amet consectetur.</div>
            </div>

            <div className={styles.offerPrice}>
                <span>267 500 ₽</span> вкл. НДС
                <div>315 450 ₽</div>
                <span>Срок изготовления: 4 дня</span>
            </div>

            <div className={styles.note}>
                ВНИМАНИЕ! Предложение действительно 5 дней.
            </div>

            <div className={styles.goods}>
                Изделия ........................... 110 000 ₽
            </div>

            <div className={styles.title}>
                Наименование
            </div>

            <ProductCard name="Лоджия 1" price="25000" icon={PlusButton}/>
            <ProductCard name="Лоджия 1" price="25000" icon={DelButton}/>
        </section>
    );
};

export default Offer;
