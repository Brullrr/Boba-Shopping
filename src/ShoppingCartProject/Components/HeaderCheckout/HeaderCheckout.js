import React, { Fragment } from 'react';
import classes from './HeaderCheckout.module.css';
import cartIMG from '../../../Images/Cart.PNG';
import homeIconIMG from '../../../Images/HomeIcon.png';
import {connect} from 'react-redux';
import * as actionTypes from '../../Store/ActionTypes/ActionTypes';
import { Link } from 'react-router-dom';


const HeaderCheckout = (props) => {
    let cartItemsNumber = 0

    props.cart.forEach(element => {
        cartItemsNumber = cartItemsNumber + element.Quantity
    });


    if(cartItemsNumber >= 100){
        cartItemsNumber = '∞'
    }
    
    return (
        <Fragment>
            <div className={classes.HeaderContainer}>
            
                <Link to="/">
                    <button className={classes.HomeButton}><img className={classes.HomeImage} src={homeIconIMG} alt="HomeImage"></img></button>
                </Link>
                
                <div />
                
                <Link to="/Browse">
                    <button className={classes.BrowseButton}>&#8492;&#120007;&#8500;&#120012;&#120008;&#8495;</button>
                </Link>
                    
                <div />
                
                <button onClick={props.toggleCartModal} className={classes.CartButton}>
                    <p className={classes.CartNumber}>{cartItemsNumber}</p>
                    <img className={classes.CartImage} src={cartIMG} alt="CartImage"></img>
                </button>

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
    toggleCartModal: () => dispatch({type: actionTypes.TOGGLE_CART_MODAL})

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderCheckout)
