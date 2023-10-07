import React from 'react';
import styles from './styles.module.css';
import Header from "../Header/Header";
import Offer from "../Offer/Offer";
import Recommendations from "../Recommendations/Recomendations";
import Characteristics from "../Characteristics/Characteristics";

const Main = () => {
    return (
        <main className={styles.wrapper}>
            <Header/>
            <Offer/>
            <Characteristics />
            <Recommendations />
        </main>
    );
};

export default Main;
