import React, { Fragment } from 'react';
import classes from './HomePage.module.css';
import Header from '../Header/Header';



const HomePage = () => {
    return (
        <Fragment>
            <Header />
            <div className={classes.HomePageContainer}>
                <p>Welcome to the world of boba</p>
            </div>
            
        </Fragment>
    )
}


export default HomePage 
