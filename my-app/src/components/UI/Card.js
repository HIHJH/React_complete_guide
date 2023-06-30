import React from 'react';
import './Card.css';

const Card = (props) => {
    const classes = 'card ' + props.className;

    return (
        <div className={classes}>{props.children}</div>
        // children은 <Card></Card> 사이의 컨텐츠
    );
}

export default Card;