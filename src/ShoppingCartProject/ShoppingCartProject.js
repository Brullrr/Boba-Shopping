import React from 'react';
import ShoppingPage from './Components/ShoppingPage/ShoppingPage';
import CartModal from './Components/CartModal/CartModal';
import HomePage from './Components/HomePage/HomePage';
import { connect } from 'react-redux';
import * as actionTypes from './Store/ActionTypes/ActionTypes';
import { HashRouter, Route} from 'react-router-dom';

// import { Route } from 'react-router-dom'




const ShoppingCartProject = (props) => {

    // console.log('[ShoppingCArtProject.js]  is cart modal ope?:   ' + props.isCartModalOpen)
    let shoppingPage = <ShoppingPage />
    let cartModal = props.isCartModalOpen ? <CartModal backdropClicked={props.toggleCartModal} /> : null
    let homePage = <HomePage />

    


    return (
        <HashRouter>
            <div>
                {cartModal}
            </div>
            <Route path='/Browse' exact render={ () => <div>{shoppingPage}</div>} />
            <Route path='/' exact render={ () => <div>{homePage}</div>} />
        </HashRouter>
        
        
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

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartProject)