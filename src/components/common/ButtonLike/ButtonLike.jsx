import React from 'react';
import {ReactComponent as LikeSvg} from "../../../img/svg/like.svg";
import {ReactComponent as DislikeSvg} from "../../../img/svg/dislike.svg";
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const ButtonLike = ({isDislike}) => {
    const wrapperClassName = `${styles.wrapper} ${isDislike ? styles.dislikeBtn : ''}`;

    return (
        <div className={wrapperClassName}>
            {isDislike ? <DislikeSvg/> : <LikeSvg/>}
            <span>{isDislike ? "Не нравится" : "Нравится"}</span>
        </div>
    );
};

ButtonLike.propTypes = {
    isDislike: PropTypes.bool,
    bgColor: PropTypes.string
}

export default ButtonLike;
