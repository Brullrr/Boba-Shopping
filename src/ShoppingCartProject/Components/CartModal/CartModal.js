import React, { Fragment} from 'react';
import classes from './CartModal.module.css';
import {connect} from 'react-redux';
import * as actionTypes from '../../Store/ActionTypes/ActionTypes';

const CartModal = (props) => {

    let total = "$500.50";

    
    return (
        <Fragment>
                <div className={classes.Backdrop} onClick={props.toggleCartModal} />


            <div className={classes.CartModalContainer}>
                <div className={classes.CartModalHolder}>
                    <p className={classes.ItemName}>Product NAme</p>
                    <p className={classes.ItemAmount}> 3 </p>
                    <p className={classes.ItemCostTotal}> 500.50 </p>
                    <p className={classes.TotalWords}>Total:</p><p className={classes.TotalCost}>{total}</p>
                    
                </div>
                <button className={classes.CheckoutButton}>Checkout</button>
            </div>
        </Fragment>
    )
}
const mapStateToProps = state => {
    return {
        isCartModalOpen: state.scrtmdlpnrdcr.isCartModalOpen
    }
}

const mapDispatchToProps = dispatch => {
    return {
    toggleCartModal: () => dispatch({type: actionTypes.TOGGLE_CART_MODAL})

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartModal)
 
