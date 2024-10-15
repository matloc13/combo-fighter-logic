const poneReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PONE':
            return { ...action.payload };
        case 'UPDATE_PONE_USERNAME':
            return { ...state, username: action.payload };
        case 'UPDATE_DECKone':
            return { ...action.payload };
        case 'FLIP_TOKENone':
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

export default poneReducer;
