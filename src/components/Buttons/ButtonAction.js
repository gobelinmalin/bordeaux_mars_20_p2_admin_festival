import React from 'react';
import '../../style.css';

function ButtonAction(props) {
    return (
    <button className={`ButtonAction ${props.class}`} onClick={props.deleteArtist} >{props.name}</button>
    );
}

export default ButtonAction;