import React, { useState } from 'react';
import classes from './Product.module.css'

const Product = (props) => {

    const [quantity, setQuantity] = useState("QNTY")



    let enterQuantity = null 
    if(quantity === 0) {
        enterQuantity = "1px solid red"
    }
    const quantityHandler = (element) => {
        let newQuantity = element.target.value >= 11 ? 10 : element.target.value

        if(newQuantity <= 0) {
            newQuantity = 0
        }
            setQuantity(newQuantity)
            
    }
    


    const verify = () => {
        if(quantity <=0 || quantity >=11) {
            alert("Please add a quantity.")
        } else {
            props.pushToCart(props.name, quantity);
        }
    }

    return (
        <div className={classes.ProductContainer}>
            <div className={classes.ProductImageHolder}>
            <img className={classes.ProductImage}   src={props.source} />
            </div>
            <p className={classes.ProductName} >{props.name}</p>    
            <div />        
            <div className={classes.ProductQandA}>
                <p className={classes.ProductPrice} >${props.price}</p>
                <input className={classes.QuantityInput} placeholder="Qnty" type='number' min="0" max="10" value={quantity} onChange={quantityHandler} style={{
                    border: enterQuantity
                }} ></input>

                <button className={classes.AddButton} onClick={verify} > Add to cart </button>
            </div>
        </div>
    )
}

export default Product