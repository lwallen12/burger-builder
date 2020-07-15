import React from 'react';
import './DrawerToggle.css'
import burgerIcon from  '../../../../assets/images/Hamburger_icon.png';

const drawerToggle = (props) => {
    return (<div className="DrawerToggle" onClick={props.clicked}>
                <img src={burgerIcon} alt="MENU"  />
            </div>);
};

export default drawerToggle;