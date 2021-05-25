import React, { Fragment } from 'react';
import classes from './Header.module.css';
import cartIMG from '../../../Images/Cart.PNG';
import homeIconIMG from '../../../Images/HomeIcon.png';
import {connect} from 'react-redux';
import * as actionTypes from '../../Store/ActionTypes/ActionTypes';
import { Link } from 'react-router-dom';


const Header = (props) => {

    let cartItemsNumber = 0
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
        isCartModalOpen: state.scrtmdlpnrdcr.isCartModalOpen
    }
}

const mapDispatchToProps = dispatch => {
    return {
    toggleCartModal: () => dispatch({type: actionTypes.TOGGLE_CART_MODAL})

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
