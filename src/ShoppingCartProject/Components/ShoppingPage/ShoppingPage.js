import React, { Fragment } from 'react';
import classes from './ShoppingPage.module.css';
import Header from '../Header/Header';
import ProductList from '../../Reusables/Products/Products';
import Product from '../../Reusables/Product/Product';
import { connect } from 'react-redux';
import * as actionTypes from '../../Store/ActionTypes/ActionTypes';

const ShoppingPage = (props) => {
    return (
        <Fragment>
            <Header />
            <div className={classes.ShoppingContainer}>
                {
                    ProductList.map((element) => {
                        return (
                            <Fragment key={element.productName} >
                                <div  />
                                <Product 
                                    name={element.productName} 
                                    price={element.productPrice} 
                                    keys={element.key} 
                                    source={element.productSource}
                                    pushToCart={props.pushToCart}
                                />
                            <div />
                            </Fragment>
                        )
                    })
                }
            </div>
    </Fragment>
    )
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        pushToCart: (name, quant) => dispatch({type: actionTypes.PUSH_TO_CART, name: name, quant: quant})
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ShoppingPage) 
