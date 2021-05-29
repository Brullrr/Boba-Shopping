import React, { Fragment, useEffect, useState } from 'react';
import classes from './CheckoutPage.module.css';
import { connect } from 'react-redux';
import * as actionTypes from '../../Store/ActionTypes/ActionTypes';
import HeaderCheckout from '../../Components/HeaderCheckout/HeaderCheckout';
import CheckoutInput from '../../Reusables/CheckoutInput/CheckoutInput';

const CheckoutPage = (props) => {

    


    const [emailState, setEmailState] =useState('')
    const [countryState,setCountryState] = useState('')
    const [stateState,setStateState] = useState('')
    const [cityState,setCityState] = useState('')
    const [addressState,setAddressState] = useState('')
    const [cardNameState,setCardNameState] = useState('')
    const [cardNumberState,setCardNumberState] = useState('')
    const [cardCSCState,setCardCSCState] = useState('')

    const [emailVerify, setEmailVerify] =useState(true)
    const [countryVerify, setCountryVerify] =useState(true)
    const [stateVerify] =useState(true)
    const [cityVerify, setCityVerify] =useState(true)
    const [addressVerify, setAddressVerify] =useState(true)
    const [cardNameVerify, setCardNameVerify] =useState(true)
    const [cardNumberVerify, setCardNumberVerify] =useState(true)
    const [cardCSCVerify, setCardCSCVerify] =useState(true)
    
    const sendRequestToServer = () => {
        
        let requestObject = {
            email: emailState,
            country: countryState,
            state: stateState,
            city: cityState,
            address: addressState,
            cardName: cardNameState,
            cardNum: cardNumberState,
            cardCSC: cardCSCState
        }

        console.log(requestObject)
    }


    const verify = (key) =>{

        switch (key) {
            case 'email':
                emailState.length <=0 ? setEmailVerify(false) : setEmailVerify(true)
        emailState.includes('@') ? setEmailVerify(true) : setEmailVerify(false)
                break;
                case 'country':
        countryState.length <=0 ? setCountryVerify(false) : setCountryVerify(true)
                
                    break;
                    case 'state':
                
                break;
                case 'city':
        cityState.length <=0 ? setCityVerify(false) : setCityVerify(true)
                
                break;
                case 'address':
        addressState.length <=0 ? setAddressVerify(false) : setAddressVerify(true)
                
                break;
                case 'cardName':
        cardNameState.length <=0 ? setCardNameVerify(false) : setCardNameVerify(true)
                
                break;
                case 'cardNumber':
        cardNumberState.length <=14 || cardNumberState.length >=17 ? setCardNumberVerify(false) : setCardNumberVerify(true)
                
                break;
                case 'cardCSC':
        cardCSCState.length <=2 || cardCSCState.length >=4 ? setCardCSCVerify(false) : setCardCSCVerify(true)
                
                break;

        
            default:
                break;
        }


        
        






    }
    const verifyAll = () =>{
        
        
        emailState.length <=0 ?    setEmailVerify(false)  : setEmailVerify(true)
        emailState.includes('@') ?   setEmailVerify(true) : setEmailVerify(false)
                
        countryState.length <=0 ?   setCountryVerify(false) : setCountryVerify(true)
                
                   
        cityState.length <=0 ?   setCityVerify(false) : setCityVerify(true)
                
                
        addressState.length <=0 ?   setAddressVerify(false) : setAddressVerify(true)
               
        cardNameState.length <=0 ?   setCardNameVerify(false) : setCardNameVerify(true)
                
        cardNumberState.length <=14 || cardNumberState.length >=17 ?   setCardNumberVerify(false) : setCardNumberVerify(true)
                
        cardCSCState.length <=2 || cardCSCState.length >=4 ?  setCardCSCVerify(false) : setCardCSCVerify(true)
        
        let sendRequest = true
        let verifyNum = 0
        emailState.length <=0 ? sendRequest = false  : verifyNum = verifyNum + 1
        emailState.includes('@') ? verifyNum = verifyNum + 1 : sendRequest = false
                
        countryState.length <=0 ? sendRequest = false : verifyNum = verifyNum + 1
                
                   
        cityState.length <=0 ? sendRequest = false : verifyNum = verifyNum + 1
                
                
        addressState.length <=0 ? sendRequest = false : verifyNum = verifyNum + 1
               
        cardNameState.length <=0 ?  sendRequest = false : verifyNum = verifyNum + 1
                
        cardNumberState.length <=14 || cardNumberState.length >=17 ? sendRequest = false : verifyNum = verifyNum + 1
                
        cardCSCState.length <=2 || cardCSCState.length >=4 ?  sendRequest = false : verifyNum = verifyNum + 1
        
        sendRequest && verifyNum === 8 ? sendRequestToServer() : alert("ERROR" )
        
        
        
    }


    
     let onInputChangeHandler = (placeholder, value) => {
        
        console.log("[CheckoutPage.js]  Current email  :"  + emailState)
        switch (placeholder) {
                case "Country":
                    setCountryState(value)
                    break;
                    case "State":
                        setStateState(value)
                        break; 
                        case "City":
                            setCityState(value)
                            break;
                            case "Address":
                                setAddressState(value)
                                break;
                                case "Number on Card":
                                    setCardNumberState(value)
                                    break;
                                    case "Email":
                                        setEmailState(value)
                                        break; 
                                        case "Name on Card":
                                        setCardNameState(value)
                                        break; 
                                        case "CSC on Card":
                                        setCardCSCState(value)
                                        break;                              
            
                default:
                    alert("Error [CheckoutPage.js]")
                    break;
                
            }
            
    }
    
    
    
    useEffect(() => {
        if(props.isCartModalOpen){
        props.toggleCartModal();}

        if(emailState.prev !== emailState && emailState !== '') {
            verify('email')
        }

        if(countryState.prev !== countryState && countryState !== '') {
            verify('country')
        }

        if(stateState.prev !== stateState && stateState !== '') {
            verify('state')
        }

        if(cityState.prev !== cityState && cityState !== '') {
            verify('city')
        }

        if(addressState.prev !== addressState && addressState !== '') {
            verify('address')
        }

        if(cardNameState.prev !== cardNameState && cardNameState !== '') {
            verify('cardName')
        }

        if(cardNumberState.prev !== cardNumberState && cardNumberState !== '') {
            verify('cardNumber')
        }

        if(cardCSCState.prev !== cardCSCState && cardCSCState !== '') {
            verify('cardCSC')
        }
    })
    

    let cart = props.cart;
    
    let total = 0;

    
    cart.forEach(element => {
        total = total + element.Quantity*parseFloat(element.Price, 10)
    });

    let itemizedTitle = <div className={classes.ElementHolderTitle}>
                            <p className={classes.ItemName}>Product</p>
                            <p className={classes.ItemAmount}>Quantity</p>
                            <p className={classes.ItemCostTotal}>Total</p>
                        </div>
    let totalTitle =    <div className={classes.TotalDiv}>
                            <p className={classes.TotalWords}>Total:</p><p className={classes.TotalCost}>${total}{total.toString().includes('.') ? 0 : null}</p>
                        </div>

    let inputsArray = [
        {
            type: 'input',
            placeholder: 'Email',
            value: emailState,
            verified: emailVerify
        },
        {
            type: 'text',
            placeholder: 'Country',
            value: countryState,
            verified: countryVerify
        },
        {
            type: 'text',
            placeholder: 'State',
            value: stateState,
            verified: stateVerify
        },
        {
            type: 'text',
            placeholder: 'City',
            value: cityState,
            verified: cityVerify
        },
        {
            type: 'text',
            placeholder: 'Address',
            value: addressState,
            verified: addressVerify
        },
        {
            type: 'text',
            placeholder: 'Name on Card',
            value: cardNameState,
            verified: cardNameVerify
        },
        {
            type: 'number',
            placeholder: 'Number on Card',
            value: cardNumberState,
            verified: cardNumberVerify
        },
        {
            type: 'number',
            placeholder: 'CSC on Card',
            value: cardCSCState,
            verified: cardCSCVerify
        },
        
    ]

    const removerHandler = (productName) => {
        props.removeProduct(productName)
    }

    let checkoutForm = <div className={classes.CheckoutContainer}>
    <div className={classes.ItemizedHolder}>
            {total >= 1 ? itemizedTitle : null}

            {
                cart.map((element) => {
                    let elemental = null 
                    if(element.Quantity >= 1) {
                        
                        elemental = <div key={element.ProductName} className={classes.ElementHolder} onClick={ () => {removerHandler(element.ProductName)}}>
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
            <div className={classes.UserInformationForm} >    
                    {inputsArray.map((element) => {
                        return (
                            <div key={element.placeholder} className={classes.CheckoutInput}>
                                <CheckoutInput 
                                    Type={element.type} 
                                    Placeholder={element.placeholder} 
                                    onChange={ (e) => {onInputChangeHandler(element.placeholder, e.target.value)}} Value={element.value} Verified={element.verified}  /></div>
                        )
                    })}
            <button className={classes.SubmitButton} onClick={verifyAll}>Submit Order</button>
        </div>
    </div>

    if(total <=0) {
        checkoutForm = <div className={classes.CheckoutContainer}>Nothing in cart.</div>
    }
    

    return (
        <Fragment>

            <HeaderCheckout />
            {checkoutForm}
        </Fragment>
    )
}


const mapStateToProps = state => {
    return {
        cart: state.crtrdcr.cart,
        isCartModalOpen: state.scrtmdlpnrdcr.isCartModalOpen
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleCartModal: () => dispatch({type: actionTypes.TOGGLE_CART_MODAL}),
        removeProduct: (productName) => dispatch({type: actionTypes.REMOVE_PRODUCT, productName: productName})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage) 
