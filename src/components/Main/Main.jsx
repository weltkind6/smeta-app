import React from 'react';
import styles from './styles.module.css';
import Header from "../Header/Header";
import Offer from "../Offer/Offer";
import Recommendations from "../Recommendations/Recomendations";
import Characteristics from "../Characteristics/Characteristics";
import AskedQuestions from "../AskedQuestions/AskedQuestions";
import Footer from "../Footer/Footer";

const Main = () => {
    return (
        <main className={styles.wrapper}>
            <div className={styles.container}>
                <Header/>
                <Offer/>
                <Characteristics />
                <Recommendations />
                <AskedQuestions />
                <Footer />
            </div>
        </main>
    );
};

export default Main;
