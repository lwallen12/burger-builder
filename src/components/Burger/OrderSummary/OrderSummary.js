import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => { 
        return (<li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}:</span> {props.ingredients[igKey]}
                </li>)
        });
 return (
     <Aux>
         <h3>Order Summary</h3>
         <p>A delicious burger with no lettuce:</p>
         <ul>
            {ingredientSummary}
         </ul>
        <div><strong>Total Price: ${props.totalPrice.toFixed(2)}</strong></div>
         <p>Continue to Checkout?</p>
         <Button btnType="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
         <Button btnType="Success" clicked={props.purchaseContinued}>Continue</Button>
     </Aux>
 );
};

export default orderSummary;