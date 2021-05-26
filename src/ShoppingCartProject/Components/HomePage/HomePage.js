import React, { Fragment } from 'react';
import classes from './HomePage.module.css';
import Header from '../Header/Header';
import MysteryBoba from '../../../Images/MysteryBoba2.png';
import NEWIMG from '../../../Images/NEW.png';
import BobaShoppingIcon from '../../../Images/BobaShopping.PNG'

const HomePage = () => {
    return (
        <Fragment>
            <Header />
            <img className={classes.BobaShoppingIcon} alt="BobaShopppingIcon" src={BobaShoppingIcon} ></img>
            <div className={classes.HomePageContainer}>
                {/* <p className={classes.WordBox}>NEW!!!</p> */}
                <img className={classes.NewImg} alt="NEW" src={NEWIMG} />
                <img className={classes.NewBoba} src={MysteryBoba} alt="MysteryBoba" />
                <p className={classes.Strip}>Mystery Boba!</p>
            </div>
            
        </Fragment>
    )
}


export default HomePage 
