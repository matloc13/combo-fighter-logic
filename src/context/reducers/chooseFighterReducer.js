const chooseFighterReducer = (state, action) => {
    const play1 = state.p1;
    const play2 = state.p2;
    switch (action.type) {
        case 'CHOOSE_FIGHTER_ONE':
            return { p1: action.payload, p2: play2, chosen: false };
        case 'CHOOSE_FIGHTER_TWO':
            return { p1: play1, p2: action.payload, chosen: false };
        case 'FIGHTERS_START':
            return { p1: play1, p2: play2, chosen: true };
        default:
            return state;
    }
};

export default chooseFighterReducer;
