import React, { Fragment } from 'react';
import classes from './CheckoutInput.module.css';

const CheckoutInput = (props) => {
    return (
        <Fragment>
            <input type={props.Type} className={classes.Input} placeholder={props.Placeholder} required ></input>
            <p className={classes.Label}>{props.Placeholder}</p>
        </Fragment>
    )
}

export default CheckoutInput