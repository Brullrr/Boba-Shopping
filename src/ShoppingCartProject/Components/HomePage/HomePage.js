import React, { Fragment } from 'react';
import classes from './HomePage.module.css';
import MysteryBoba from '../../../Images/MysteryBoba2.png';
import NEWIMG from '../../../Images/NEW.png';
import BobaShoppingIcon from '../../../Images/BobaShopping.PNG'
import { Link } from 'react-router-dom'
import Arrow from '../../../Images/Arrow.png'

const HomePage = () => {
    return (
        <Fragment>
            <Link to="/Browse"><img className={classes.BobaShoppingIcon} alt="BobaShopppingIcon" src={BobaShoppingIcon} ></img></Link>
            <div className={classes.HomePageContainer}>
                {/* <p className={classes.WordBox}>NEW!!!</p> */}
                <img className={classes.NewImg} alt="NEW" src={NEWIMG} />
                <img className={classes.NewBoba} src={MysteryBoba} alt="MysteryBoba" />
                <p className={classes.Strip}>Mystery Boba!</p>
            </div>
            <Link to="/Browse"><img className={classes.Arrow} alt="BobaShopppingIcon" src={Arrow} ></img></Link>
            
        </Fragment>
    )
}


export default HomePage 
