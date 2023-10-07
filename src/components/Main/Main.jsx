import React from 'react';
import styles from './styles.module.css';
import Header from "../Header/Header";
import Offer from "../Offer/Offer";

const Main = () => {
    return (
        <main className={styles.wrapper}>
            <Header/>
            <Offer/>
        </main>
    );
};

export default Main;
