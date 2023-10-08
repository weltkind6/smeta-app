import React from 'react';
import styles from './styles.module.css';
import ButtonLike from "../common/ButtonLike/ButtonLike";

const QuestionBlock = () => {
    return (
        <div className={styles.wrapper}>
            <h3>Вам нравится наше
                предложение?
            </h3>
               <div className={styles.btnWrapper}>
                   <ButtonLike />
                   <ButtonLike isDislike/>
               </div>
        </div>
    );
};

export default QuestionBlock;
