import React from 'react';
import styles from './styles.module.css';
import Header from "../Header/Header";
import Offer from "../Offer/Offer";
import Recommendations from "../Recommendations/Recomendations";
import Characteristics from "../Characteristics/Characteristics";
import AskedQuestions from "../AskedQuestions/AskedQuestions";
import Footer from "../Footer/Footer";
import MyComponent from "../MyComponent/MyComponent";

const Main = () => {
    return (
        <main className={styles.wrapper}>
            <div className={styles.container}>
                <Header/>
                <Offer/>
                <Characteristics />
                <Recommendations />
                <AskedQuestions />
                <MyComponent />
            </div>
            <Footer />
        </main>
    );
};

export default Main;
