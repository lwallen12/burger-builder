import React from 'react';
import './BuildControl/BuildControl.css';
import './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Pickle', type: 'salad'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Meat', type: 'meat'}
]

const buildControls = (props) => (
    <div className="BuildControls">
        <p>Price: $<strong>{props.totalPrice.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
            />
        ))}
        <button 
            className="OrderButton" 
            disabled={!props.purchaseable}
            onClick={props.ordered}>Order Now</button>
    </div>
);

export default buildControls;