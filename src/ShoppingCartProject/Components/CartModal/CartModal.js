import React, { Fragment} from 'react';
import classes from './CartModal.module.css';
import {connect} from 'react-redux';
import * as actionTypes from '../../Store/ActionTypes/ActionTypes';
import { Link } from 'react-router-dom';

const CartModal = (props) => {

    let cart = props.cart;
    
    let total = 0;

    
    cart.forEach(element => {
        total = total + element.Quantity*parseFloat(element.Price, 10)
    });

    let itemizedTitle = <div className={classes.ElementHolderTitle}>
                            <p className={classes.ItemName}>Product</p>
                            <p className={classes.ItemAmount}>Quantity</p>
                            <p className={classes.ItemCostTotal}>Product Total</p>
                        </div>
    let totalTitle =    <div className={classes.TotalDiv}>
                            <p className={classes.TotalWords}>Total:</p><p className={classes.TotalCost}>${total}{total.toString().includes('.') ? 0 : null}</p>
                        </div>

    const removerHandler = (productName) => {
        props.removeProduct(productName)
    }
    return (
        <Fragment>
                <div className={classes.Backdrop} onClick={props.toggleCartModal} />


            <div className={classes.CartModalContainer}>
                <div className={classes.CartModalHolder}>
                    {total >= 1 ? itemizedTitle : null}

                    {
                        cart.map((element) => {
                            let elemental = null
                            
                            if(element.Quantity >= 1) {    
                                elemental = <div key={element.ProductName} className={classes.ElementHolder}  onClick={() => {removerHandler(element.ProductName)}}>
                                                <p className={classes.ItemName}>{element.ProductName}</p>
                                                <p className={classes.ItemAmount}>{element.Quantity}</p>
                                                <p className={classes.ItemCostTotal}>${
                                                element.Quantity*parseFloat(element.Price)} 
                                                {(element.Quantity*parseFloat(element.Price) + 0).toString().includes('.') ? 0 : null}</p>
                                            </div>  
                            }

                            return elemental
                        })
                    }

                    {total >= 1 ? totalTitle : null}
                    
                </div>
                {total >= 1 ? <Link to="/Checkout"><button className={classes.CheckoutButton}>Checkout</button></Link> : <p>Your cart is empty.</p>}

            </div>
        </Fragment>
    )
}
const mapStateToProps = state => {
    return {
        isCartModalOpen: state.scrtmdlpnrdcr.isCartModalOpen,
        cart: state.crtrdcr.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
    toggleCartModal: () => dispatch({type: actionTypes.TOGGLE_CART_MODAL}),
    removeProduct: (productName) => dispatch({type: actionTypes.REMOVE_PRODUCT, productName: productName})

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartModal)
 
