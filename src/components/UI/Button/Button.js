import React from 'react';
import './Button.css'

const button = (props) => {

    const classString = ['Button', props.btnType].join(' ');
return (<button 
    onClick={props.clicked}
    className={classString}>
    {props.children}
</button>);
};

export default button;