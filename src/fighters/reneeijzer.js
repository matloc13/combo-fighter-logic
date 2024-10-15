
const knee = {
    fighter: 'Renée Ijzer',
    name: 'knee',
    copies: 10,
    starting: true,
    special: false,
    color: 'blue',
    btnIcon: 'triangle',
    initiative: null,
    openingDamage: 0,
    comboDamage: 2,
    comboBox: [
        {color: 'red', shape: 'triangle'},
        {color: 'yellow', shape: 'triangle'},
        {color: 'yellow', shape: 'square'}
    ]
}

const kick = {
    fighter: 'Renée Ijzer',
    name: 'kick',
    copies: 6,
    starting: true,
    special: false,
    color: 'red',
    btnIcon: 'circle',
    initiative: 4,
    openingDamage: 4,
    comboDamage: 3,
    comboBox: [
        {color: 'blue', shape: 'triangle'},
        {color: 'yellow', shape: 'triangle'}
    ]
}

const jab = {
    fighter: 'Renée Ijzer',
    name: 'jab',
    copies: 12,
    starting: true,
    special: false,
    color: 'red',
    btnIcon: 'triangle',
    initiative: 8,
    openingDamage: 1,
    comboDamage: 2,
    comboBox: [
        {color: 'red', shape: 'triangle'},
        {color: 'red', shape: 'square'},
        {color: 'yellow', shape: 'triangle'}
]
}

const circle = {
    fighter: 'Renée Ijzer',
    name: 'circle',
    copies: 6,
    starting: false,
    special: false,
    color: 'yellow',
    btnIcon: 'circle',
    initiative: 8,
    openingDamage: 1,
    comboDamage: 2,
    comboBox: [
        {color: 'red', shape: 'triangle'},
        {color: 'red', shape: 'circle'}
]
}


const closeDistance = {
    fighter: 'Renée Ijzer',
    name: 'close distance',
    copies: 7,
    starting: true,
    special: false,
    color: 'yellow',
    btnIcon: 'triangle',
    initiative: null,
    openingDamage: 0,
    comboDamage: 0,
    comboBox: [
        {color: 'red', shape: 'triangle'},
        {color: 'red', shape: 'square'},
        {color: 'blue', shape: 'triangle'}
]
}


const cross = {
    fighter: 'Renée Ijzer',
    name: 'cross',
    copies: 9,
    starting: true,
    special: false,
    color: 'red',
    btnIcon: 'square',
    initiative: 6,
    openingDamage: 2,
    comboDamage: 3,
    comboBox: [
        {color: 'red', shape: 'circle'},
        {color: 'yellow', shape: 'triangle'},
        {color: 'yellow', shape: 'square'}
]
}

const reneeijzer = {
    name: 'Renée Ijzer',
    fightingStyle: 'kickboxing',
    deck: [knee, kick, jab, circle, closeDistance, cross],
    token: 'a',
    a: {
        name: 'Adrenaline',
        text: 'After you play a Signature Combo, flip to B-side'
    },
    b: {
        name: 'Rotterdam Rush Hour',
        text: 'If you empty an entire hand of 5 cards, you may immediately draw a new hand of 5 cards and continue the combo. If you do, to back to A',
    },
    signatureCombos: {
        supermanPunch: {
            shape1: {color: 'red', shape: 'triangle'},
            shape2: {color: 'yellow', shape:'triangle'},
            shape3: {color: 'red', shape: 'square'},
            bonus: {color: 'yellow', shape: 'square'},
            damage: 6,
            bonusDamage: 10
        },
        lightingRoundhouse: {
            shape1: {color: 'red', shape: 'square'},
            shape2: {color: 'yellow', shape: 'square'},
            shape3: {color: 'red', shape: 'circle'},
            bonus: {color: 'yelow', shape: 'triangle'},
            damage: 6,
            bonusDamage: 10,
        },
        flyingDutchman: {
            shape1: {color: 'red', shape: 'triangle'},
            shape2: {color: 'red', shape: 'triangle'},
            shape3: {color: 'yellow', shape: 'triangle'},
            shape4: {color: 'blue', shape: 'triangle'},
            damage: 11,
        }
}
}


export default reneeijzer;