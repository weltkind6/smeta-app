import React from 'react';
import styles from './styles.module.css'
import ProductCard from "../common/ProductCard/ProductCard";
import Goods from "../common/Goods/Goods";
import Name from "../common/Name/Name";
import QuestionBlock from "../common/QuestionBlock/QuestionBlock";
import ButtonLike from "../common/ButtonLike/ButtonLike";

const Characteristics = () => {
    return (
        <>
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
            <ProductCard name="Лоджия1" price="37 000"/>
            <Goods price="25 000" title="Комплектующие"/>
            <Name/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>

            <Goods price="25 000" title="Комплектующие"/>
            <Name/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>


            <div>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, aut consequatur, corporis deserunt
                    dolores ex fugit molestias necessitatibus obcaecati perspiciatis quo quod tempore ullam velit voluptas!
                    Id necessitatibus tempore voluptatibus! Assumenda dicta eius fugit in itaque nobis optio repellat vel!
                    Ad aliquid consectetur, corporis eius eos explicabo ipsa itaque laudantium mollitia neque nostrum
                    quae quam, ratione similique ut vero voluptatum?
                </p>
                <div className={styles.signature}>
                    <div>С уважением, менеджер</div>
                    <div>офиса продаж Александр Саввин</div>
                </div>
                <QuestionBlock />
            </div>
        </>
    );
};

export default Characteristics;
