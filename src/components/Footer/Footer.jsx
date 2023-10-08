import React from 'react';
import logo from "../../img/footer-logo.png";
import styles from './styles.module.css';
import UpArrow from "../common/UpArrow/UpArrow";

const Footer = () => {
    return (<div className={styles.wrapper}>
            <footer className={styles.footer}>
                <div className={styles.logo}>
                    <img src={logo} alt="logo"/>
                    <UpArrow />
                </div>
                <div className={styles.address}>
                    <span className={styles.title}>Юридический адрес</span>
                    <p className={styles.info}>
                        <div>142279, Московская область,</div>
                        <div>Серпуховский район,</div>
                        <div>рабочий поселок Оболенск, корпус 72</div>
                        <div>ОГРН: № 1087746612623</div>
                        <div>от 07 мая 2008 года.</div>
                    </p>
                </div>
                <div className={styles.contacts}>
                    <span className={styles.title}>Контакты</span>
                    <p className={styles.info}>
                        <a href="tel:+79651234567">+7 (965) 123-45-67</a>
                        <a href="mailto:info@okonti.ru">info@okonti.ru</a>
                        <a href="#">www.okonti.ru</a>
                    </p>
                </div>
            </footer>
            <div className={styles.copyright}>
                © «Оконный континент» 2022. Все права защищены.
            </div>
        </div>);
};

export default Footer;
