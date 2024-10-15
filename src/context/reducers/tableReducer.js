const tableReducer = (state, action) => {
    switch (action.type) {
        case 'PLAY_TABLE':
            return { ...action.payload };
        case 'CLEAR_TABLE':
            return { p1: [], p2: []};
        case 'CLEAR_TABLE_one':
            return { ...action.payload };
        case 'CLEAR_TABLE_two':
            return { ...action.payload };
        default:
            return state;
    }
};

export default tableReducer;