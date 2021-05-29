import React, { Fragment } from 'react';
import classes from './CheckoutInput.module.css';

const CheckoutInput = (props) => {
    return (
        <Fragment>
            <input 
                type={props.Type} 
                className={props.Verified ? classes.Input : classes.NotVerified} 
                placeholder={props.Placeholder} 
                onChange={props.onChange} 
                value={props.Value}
                maxLength='25'
                minLength="5"
                ></input>
            <p className={classes.Label}>{props.Placeholder}</p>
        </Fragment>
    )
}

export default CheckoutInput