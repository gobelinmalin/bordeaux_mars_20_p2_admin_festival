import React from 'react';
import '../../style.css';

function ButtonAction(props) {
    return (
    <button className={`ButtonAction ${props.class}`} >{props.name}</button>
    );
}

export default ButtonAction;