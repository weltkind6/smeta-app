import React from 'react';
import styles from "../Header/styles.module.css";
import logo from "../../img/logo.png";
import callIcon from "../../img/svg/call-calling.svg";

const Header = () => {
    return (
        <header className={styles.wrapper}>
            <img src={logo} alt="logo"/>
            <img src={callIcon} alt="call-icon"/>
        </header>
    );
};

export default Header;
