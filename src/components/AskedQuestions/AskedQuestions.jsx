import React from 'react';
import styles from './styles.module.css';
import QuestionBlock from "../QuestionBlock/QuestionBlock";

const AskedQuestions = () => {
    return (
        <div className={styles.wrapper}>
            <h4>Часто задаваемые вопросы</h4>
            <div className={styles.links}>
                <a href="#">Как правильно выбрать окно?</a>
                <a href="#">Почему заказывать у частников рискованно?</a>
                <a href="#">От чего зависит качество монтажа окон?</a>
                <a href="#">Как понять, какое окно теплое?</a>
                <a href="#">Почему сроки доставки и установки могут быть нарушены?</a>
                <a href="#">Будет ли грязно во время монтажа?</a>
                <a href="#">Что делать, если окно открылось сразу в двух положениях?</a>
                <a href="#">Как установить москитную сетку?</a>
                <a href="#">Как установить москитную сетку «Крыло»?</a>
                <a href="#">Что можно сделать с окном для детской безопасности?</a>
                <a href="#">Что такое режим «зима-лето» и как он регулируется?</a>
                <a href="#">Для чего нужен роликовый приподниматель «Микролифт»?</a>
                <a href="#">Чем отличается взломостойкая фурнитура от обычной?</a>
            </div>
            <QuestionBlock />
        </div>
    );
};

export default AskedQuestions;
