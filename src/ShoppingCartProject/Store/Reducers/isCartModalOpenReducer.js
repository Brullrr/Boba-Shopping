import * as actionTypes from '../../Store/ActionTypes/ActionTypes';

const initialState = {
    isCartModalOpen: false
};

const reducer = (state = initialState, action) => {

    if(action.type === actionTypes.TOGGLE_CART_MODAL){   
        
        return {
            ...state,
            isCartModalOpen: !state.isCartModalOpen
        }
    } 


    return state
    
};

export default reducer;