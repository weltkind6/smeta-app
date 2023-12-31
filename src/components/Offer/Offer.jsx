import React from 'react';
import styles from './styles.module.css'
import ProductCard from "../common/ProductCard/ProductCard";
import {ReactComponent as PlusButton} from "../../img/svg/add.svg";
import {ReactComponent as DelButton} from "../../img/svg/delete.svg";
import windowSmall from '../../img/window-small.jpg'
import Goods from "../common/Goods/Goods";
import Name from "../common/Name/Name";

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
                <span>ВНИМАНИЕ! </span>
                Предложение действительно 5 дней.
            </div>

            <Goods price="110 000" title="Комплектующие"/>
            <Name />
            <ProductCard name="Лоджия 1" price="25 000" />
            <ProductCard name="Изделие: Окно (О-2)" price="48 000" isDeletedBtn/>

            <div className={styles.photo}>
                <img src={windowSmall} alt="window-small"/>
            </div>
        </section>
    );
};

export default Offer;
