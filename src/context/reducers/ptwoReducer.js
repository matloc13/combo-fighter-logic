const ptwoReducer = (state, action) => {
    // console.log('state', state);
    switch (action.type) {
        case 'SET_PTWO':
            return { ...action.payload };
        case 'UPDATE_PTWO_USERNAME':
            return { ...state, username: action.payload };
        case 'UPDATE_DECKtwo':
            return { ...action.payload };
        case 'FLIP_TOKENtwo':
            if (state.token === 'a') {
                return { ...state, token: 'b' };
            }
            if (state.token === 'b') {
                return { ...state, token: 'a' };
            }
            break;
        default:
            return state;
    }
};

export default ptwoReducer;
