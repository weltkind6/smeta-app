import React from 'react';
import './styles.css'

const ButtonLike = ({ icon: Icon, bgColor }) => {
    return (
        <div>
            <div className="likeBtn" style={{background: bgColor}}>
                <Icon/>
                <span>Нравится</span>
            </div>
        </div>
    );
};

export default ButtonLike;
