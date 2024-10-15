const confirmationReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_CONFIRM':
            return {...action.payload};
        case 'CLEAR_CONFIRM':
            return {playerone: false, playertwo: false};
        default: 
            return state;
    }
}

export default confirmationReducer;