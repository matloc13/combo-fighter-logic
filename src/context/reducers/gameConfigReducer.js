const gameConfigReducer = (state, action) => {
    const win = state.winnerDetermined
    switch (action.type) {
 
        case 'UPDATE_CONFIG_DRAWUP':
                return {
                    drawUp: {
                        current: false,
                        finished: true
                    },
                    playCard: {
                        current: true,
                        finished: false
                    },
                    winnerDetermined: {
                        current: false,
                        finished: false,
                        winner: ''
                    },
                    combo: {
                        current: false,
                        finsished: false
                    },
                    damageDetermined: {
                        current: false,
                        finished: false,
                        damage: 0,
                    }
                }
        case 'UPDATE_CONFIG_PLAYED':
                return {
                    drawUp: {
                        current: false,
                        finished: true
                    },
                    playCard: {
                        current: false,
                        finished: true
                    },
                    winnerDetermined: {
                        current: true,
                        finished: false,
                        winner: ''
                    },
                    combo: {
                        current: false,
                        finsished: false
                    },
                    damageDetermined: {
                        current: false,
                        finished: false,
                        damage: 0,
                    }
                }
        case 'UPDATE_CONFIG_WINNER':
            return {
                drawUp: {
                    current: false,
                    finished: true
                },
                playCard: {
                    current: false,
                    finished: true
                },
                winnerDetermined: {
                    current: false,
                    finished: true,
                    winner: action.winner
                },
                combo: {
                    current: true,
                    finsished: false
                },
                damageDetermined: {
                    current: false,
                    finished: false,
                    damage: 0
                }
            }
        case'UPDATE_CONFIG_COMBO':
            return {
                drawUp: {
                    current: false,
                    finished: true
                },
                playCard: {
                    current: false,
                    finished: true
                },
                winnerDetermined: {
                    current: false,
                    finished: true,
                    winner: win.winner
                },
                combo: {
                    current: false,
                    finsished: true
                },
                damageDetermined: {
                    current: true,
                    finished: false,
                    damage: 0
                }
            }
            case'UPDATE_CONFIG_DAMAGE_DONE':
            return {
                drawUp: {
                    current: false,
                    finished: true
                },
                playCard: {
                    current: false,
                    finished: true
                },
                winnerDetermined: {
                    current: false,
                    finished: true,
                    winner: win.winner
                },
                combo: {
                    current: false,
                    finsished: true
                },
                damageDetermined: {
                    current: false,
                    finished: true,
                    damage: action.payload
                }
            }
    case 'CLEAR_CONFIG':
            const gameConfigInit = {
                drawUp: {
                    current: true,
                    finished: false
                },
                playCard: {
                    current: false,
                    finished: false
                },
                winnerDetermined: {
                    current: false,
                    winner: '',
                    finished: false
                },
                combo: {
                    current: false,
                    finsished: false
                },
                damageDetermined: {
                    current: false,
                    finished: false,
                    damage: 0
                }
            }
            return { ...gameConfigInit }
    default:
            return state;
    }
}

export default gameConfigReducer;