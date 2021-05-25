import React, { Fragment } from 'react';
import classes from './ShoppingPage.module.css';
import Header from '../Header/Header';
import ProductList from '../../Reusables/Products/Products';
import Product from '../../Reusables/Product/Product';
import pic from '../../../Images/Cart.PNG'

const ShoppingPage = () => {

    


    return (
        <Fragment>
            <Header />
            <div className={classes.ShoppingContainer}>
                {
                    ProductList.map((element) => {
                        return (
                            <Fragment>
                                <div />
                                <Product 
                                    name={element.productName} 
                                    price={element.productPrice} 
                                    keys={element.key} 
                                    source={element.productSource}
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


export default ShoppingPage 
