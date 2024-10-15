const kagamiReducer = (state, action) => {
    switch (action.type) {
        case 'WIN_ONE':
            return { winOne: true, winTwo: false, winThree: false, winFour: false };
        case 'WIN_TWO':
            return { winOne: true, winTwo: true, winThree: false, winFour: false };
        case 'WIN_THREE':
            return { winOne: true, winTwo: true, winThree: true, winFour: false };
        case 'WIN_FOUR':
            return { winOne: true, winTwo: true, winThree: true, winFour: true };
        case 'LOSE': {
            return { winOne: false, winTwo: false, winThree: false, winFour: false };
        }
        default:
            return state;
    }
};

export default kagamiReducer;
