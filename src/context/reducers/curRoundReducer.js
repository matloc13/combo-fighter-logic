const curRoundReducer = (state, action) => {
    switch (action.type) {
        case 'RAISE_NUM':
            return state += 1;
        default:
            return state;
    }
}

export default curRoundReducer;