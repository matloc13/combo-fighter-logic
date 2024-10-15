const comboDamageReducer = (state, action) => {
    switch (action.type) {
        case 'COMBO_DAMAGE':
            return action.payload;
        default: 
            return state;
    }
}

export default comboDamageReducer;