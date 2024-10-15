const roundReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ROUND':
            return {...action.payload};
        default:
            return state;
    }
};

export default roundReducer;

