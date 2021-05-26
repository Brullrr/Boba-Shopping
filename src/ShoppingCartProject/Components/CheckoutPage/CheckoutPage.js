import React, { Fragment } from 'react';
import classes from './CheckoutPage.module.css';
import { connect } from 'react-redux';
import * as actionTypes from '../../Store/ActionTypes/ActionTypes';
import Header from '../Header/Header';
import BobaShoppingIcon from '../../../Images/BobaShopping.PNG'
import CheckoutInput from '../../Reusables/CheckoutInput/CheckoutInput';

const CheckoutPage = (props) => {
    props.toggleCartModal();

    let cart = props.cart;
    
    let total = 0;

    
    cart.forEach(element => {
        total = total + element.Quantity*parseFloat(element.Price, 10)
    });

    let itemizedTitle = <div className={classes.ElementHolder}>
                            <p className={classes.ItemName}>Product</p>
                            <p className={classes.ItemAmount}>Quantity</p>
                            <p className={classes.ItemCostTotal}>Product Total</p>
                        </div>
    let totalTitle =    <div className={classes.TotalDiv}>
                            <p className={classes.TotalWords}>Total:</p><p className={classes.TotalCost}>${total}{total.toString().includes('.') ? 0 : null}</p>
                        </div>

    let inputsArray = [
        {
            type: 'input',
            placeholder: 'Email'
        },
        {
            type: 'text',
            placeholder: 'Country'
        },
        {
            type: 'text',
            placeholder: 'State'
        },
        {
            type: 'text',
            placeholder: 'City'
        },
        {
            type: 'text',
            placeholder: 'Address'
        },
        {
            type: 'text',
            placeholder: 'Name on Card'
        },
        {
            type: 'number',
            placeholder: 'Number on Card'
        },
        {
            type: 'number',
            placeholder: 'CSC on Card'
        },
        
    ]

    let checkoutForm = <div className={classes.CheckoutContainer}>
    <div className={classes.ItemizedHolder}>
            {total >= 1 ? itemizedTitle : null}

            {
                cart.map((element) => {
                    if(element.Quantity >= 1) {
                        return (
                            <div className={classes.ElementHolder}>
                                <p className={classes.ItemName}>{element.ProductName}</p>
                                <p className={classes.ItemAmount}>{element.Quantity}</p>
                                <p className={classes.ItemCostTotal}>${
                                element.Quantity*parseFloat(element.Price)} 
                                {(element.Quantity*parseFloat(element.Price) + 0).toString().includes('.') ? 0 : null} </p>
                            </div>
                        )
                    }
                })
            }

            {total >= 1 ? totalTitle : null}
            
            
        </div>
            <div className={classes.UserInformationForm} >
                
                    
                    {inputsArray.map((element) => {
                        return (
                            <div className={classes.CheckoutInput}><CheckoutInput Type={element.type} Placeholder={element.placeholder}  /></div>
                        )
                    })}
            <button className={classes.SubmitButton}>Submit Order</button>
        </div>
    </div>

    if(total <=0) {
        checkoutForm = <div className={classes.CheckoutContainer}>Nothing in cart.</div>
    }
    return (
        <Fragment>

            <Header />
            {checkoutForm}
        </Fragment>
    )
}


const mapStateToProps = state => {
    return {
        cart: state.crtrdcr.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleCartModal: () => dispatch({type: actionTypes.TOGGLE_CART_MODAL})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage) 
