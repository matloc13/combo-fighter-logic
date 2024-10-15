
const phoenixStrike = {
    fighter: 'Grace Lee',
    name: 'phoenix strike',
    copies: 1,
    starting: true,
    special: false,
    color: 'red',
    btnIcon: 'circle',
    initiative: 10,
    openingDamage: 8,
    comboDamage: 0,
    comboBox: []
}

const snakeSnap = {
    fighter: 'Grace Lee',
    name: 'snake snap',
    copies: 12,
    starting: true,
    special: false,
    color: 'red',
    btnIcon: 'triangle',
    initiative: 6,
    openingDamage: 1,
    comboDamage: 2,
    comboBox: [
        {color: 'red', shape: 'square'},
        {color: 'blue', shape: 'triangle'},
        {color: 'yellow', shape: 'triangle'}

]
}

const tigerSlash = {
    fighter: 'Grace Lee',
    name: 'tiger slash',
    copies: 10,
    starting: true,
    special: false,
    color: 'red',
    btnIcon: 'square',
    initiative: 3,
    openingDamage: 3,
    comboDamage: 2,
    comboBox: [
        {color: 'red', shape: 'triangle'},
        {color: 'blue', shape: 'square'},
        {color: 'yellow', shape: 'square'}
]
}

const elbow = {
    fighter: 'Grace Lee',
    name: 'elbow',
    copies: 6,
    starting: true,
    special: false,
    color: 'blue',
    btnIcon: 'triangle',
    initiative: null,
    openingDamage: 0,
    comboDamage: 2,
    comboBox: [
        {color: 'red', shape: 'triangle'},
        {color: 'red', shape: 'circle'}
]
}


const spin = {
    fighter: 'Grace Lee',
    name: 'spin',
    copies: 6,
    starting: true,
    special: false,
    color: 'yellow',
    btnIcon: 'triangle',
    initiative: null,
    openingDamage: 0,
    comboDamage: 0,
    comboBox: [
        {color: 'red', shape: 'triangle'},
        {color: 'blue', shape: 'triangle'}
]
}

const evade = {
    fighter: 'Grace Lee',
    name: 'evade',
    copies: 6,
    starting: false,
    special: false,
    color: 'blue',
    btnIcon: 'square',
    initiative: null,
    openingDamage: 0,
    comboDamage: 0,
    comboBox: [
        {color: 'red', shape: 'square'},
        {color: 'yellow', shape: 'triangle'},
        {color: 'yellow', shape: 'circle', special: true}
]
}

const swoop = {
    fighter: 'Grace Lee',
    name: 'swoop',
    copies: 4,
    starting: false,
    special: true,
    color: 'yellow',
    btnIcon: 'circle',
    initiative: null,
    openingDamage: 0,
    comboDamage: 0,
    comboBox: [
        {color: 'red', shape: 'square'},
        {color: 'red', shape: 'circle'}
]
}

const sideStep = {
    fighter: 'Grace Lee',
    name: 'side step',
    copies: 5,
    starting: false,
    special: false,
    color: 'yellow',
    btnIcon: 'square',
    initiative: null,
    openingDamage: 0,
    comboDamage: 0,
    comboBox: [
        {color: 'red', shape: 'triangle'},
        {color: 'red', shape: 'square'},
        {color: 'blue', shape: 'square'}
]
}

 const gracelee = {
    name: 'Grace Lee',
    fightingStyle: 'Kung Fu',
    deck: [spin, sideStep, swoop, elbow, evade, snakeSnap, tigerSlash, phoenixStrike],
    token: 'a',
    a: {
        name: 'Bo Staff',
        text: 'As long as you have Phoenix Strike in your hand, your red card have a + 3 initiative, and deal + 1 damage. After you play Phoenix Strike flip to B-side'
    },
    b: {
        name: 'Broken Staff',
        text: 'Remove Phoenix Strike from the game.'
    },
    signatureCombos: {
        spittingCobra: {
            shape1: {color: 'yellow', shape: 'triangle'},
            shape2: {color: 'red', shape:'triangle'},
            shape3: {color: 'blue', shape: 'triangle'},
            bonus: {color: 'yellow', shape: 'square'},
            damage: 7,
            bonusDamage: 9,
        },
        crouchingTiger: {
            shape1: {color: 'yellow', shape: 'square'},
            shape2: {color: 'red', shape: 'square'},
            shape3: {color: 'blue', shape: 'square'},
            bonus: {color: 'yelow', shape: 'triangle'},
            damage: 7,
            bonusDamage: 9,
        },
        swoopingPhoenix: {
            shape1: {color: 'yellow', shape: 'square'},
            shape2: {color: 'blue', shape: 'square'},
            shape3: {color: 'yellow', shape: 'circle', special: true},
            shape4: {color: 'red', shape: 'circle'},
            damage: 15,
        }
}
}
export default gracelee;