import * as actionTypes from '../ActionTypes/ActionTypes';
const initialState = {
    cart: [
        {
            ProductName: "Beer Boba",
            Quantity: 0,
            Price: 4.5
        },
        {
            ProductName: "Eiffel Boba",
            Quantity: 0,
            Price: 5
        },
        {
            ProductName: "Fancy Boba",
            Quantity: 0,
            Price: 6.5
        },
        {
            ProductName: "IceCream Boba",
            Quantity: 0,
            Price: 8.5
        },
        {
            ProductName: "Mason Boba",
            Quantity: 0,
            Price: 3
        },
        {
            ProductName: "Mystery Boba",
            Quantity: 0,
            Price: 5
        },
        {
            ProductName: "Pizza Boba",
            Quantity: 0,
            Price: 8
        },
        {
            ProductName: "Punching Boba",
            Quantity: 0,
            Price: 4.5
        },
        {
            ProductName: "Refreshing Boba",
            Quantity: 0,
            Price: 6
        },
        {
            ProductName: "Tic-Tac-Toba",
            Quantity: 0,
            Price: 7.5
        },

    ],

};

const cartReducer = (state = initialState, action) => {
    if(action.type === actionTypes.PUSH_TO_CART){   
        let cartCopy = [...state.cart]
        let int = parseInt(action.quant, 10)
        cartCopy.forEach((ele) => {
            if(ele.ProductName === action.name) {
                ele.Quantity = ele.Quantity + int
            }
        })

        return {
            ...state,
            cart: cartCopy
        }
    } 
    return state
};

export default cartReducer;