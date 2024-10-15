const roundCountReducer = (state, action) =>{
    switch (action.type) {
        case 'UPDATE_ROUND_COUNT':
            return [...action.payload];
    
        default:
            return state;
    }
}

export default roundCountReducer;