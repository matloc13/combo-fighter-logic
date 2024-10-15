

const punch = {
    fighter: 'Francisco Ferro',
    name: 'punch',
    copies: 11,
    starting: true,
    special: false,
    color: 'red',
    btnIcon: 'triangle',
    initiative: 7,
    openingDamage: 2,
    comboDamage: 2,
    comboBox: [
        {color: 'red', shape: 'square'},
        {color: 'blue', shape: 'triangle'},
        {color: 'yellow', shape: 'triangle'}]
}

const lowkick = {
    fighter: 'Francisco Ferro',
    name: 'low kick',
    copies: 8,
    starting: true,
    special: false,
    color: 'red',
    btnIcon: 'square',
    initiative: 5,
    openingDamage: 3,
    comboDamage: 3,
    comboBox: [
        {color: 'red', shape: 'triangle'},
        {color: 'blue', shape: 'triangle'},
        {color: 'yellow', shape: 'square'}

]
}

const stepin = {
    fighter: 'Francisco Ferro',
    name: 'step in',
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

const highkick = {
    fighter: 'Francisco Ferro',
    name: 'high kick',
    copies: 6,
    starting: true,
    special: false,
    color: 'red',
    btnIcon: 'circle',
    initiative: 3,
    openingDamage: 5,
    comboDamage: 3,
    comboBox: [
        {color: 'blue', shape: 'square'},
        {color: 'yellow', shape: 'triangle'}
]
}


const soak = {
    fighter: 'Francisco Ferro',
    name: 'soak',
    copies: 5,
    starting: true,
    special: false,
    color: 'blue',
    btnIcon: 'triangle',
    initiative: null,
    openingDamage: 0,
    comboDamage: 0,
    comboBox: [
        {color: 'red', shape: 'circle'},
        {color: 'yellow', shape: 'triangle'}
]
}

const stepout = {
    fighter: 'Francisco Ferro',
    name: 'step out',
    copies: 4,
    starting: false,
    special: false,
    color: 'yellow',
    btnIcon: 'square',
    initiative: null,
    openingDamage: 0,
    comboDamage: 0,
    comboBox: [
        {color: 'red', shape: 'cirlce'},
        {color: 'blue', shape: 'square'}     
]
}

const block = {
    fighter: 'Francisco Ferro',
    name: 'block',
    copies: 9,
    starting: false,
    special: true,
    color: 'blue',
    btnIcon: 'square',
    initiative: null,
    openingDamage: 0,
    comboDamage: 0,
    comboBox: [
        {color: 'red', shape: 'triangle'},
        {color: 'red', shape: 'square'},
        {color: 'yellow', shape: 'square'}
]
}



 const franciscoferro = {
    name: 'Francisco Ferro',
    fightingStyle: 'Kyokushin Karate',
    deck: [punch, lowkick, highkick, stepin, stepout, soak, block],
    token: 'a',
    a: {
        name: 'Show No Pain',
        text: 'After your opponent deals damage to you, flip this to its B-side.'
    },
    b: {
        name: 'Retaliate',
        text: 'After you win a Round, you may have a single card or a Signature Combo deal double damage. If you do, flip this token to its A-side.'
    },
    signatureCombos: {
        powerPunch: {
            shape1: {color: 'blue', shape: 'triangle'},
            shape2: {color: 'yellow', shape:'triangle'},
            shape3: {color: 'red', shape: 'triangle'},
            damage: 5,
        },
        boneCrusher: {
            shape1: {color: 'blue', shape: 'square'},
            shape2: {color: 'red', shape: 'square'},
            shape3: {color: 'blue', shape: 'triangle'},
            bonus: {color: 'yelow', shape: 'triangle'},
            damage: 6,
            bonusDamage: 8,
        },
        doKeitenMawashiGeri: {
            shape1: {color: 'blue', shape: 'square'},
            shape2: {color: 'yellow', shape: 'square'},
            shape3: {color: 'red', shape: 'circle',},
            bonus: {color: 'yellow', shape: 'triangle'},
            damage: 7,
            bonusDamage: 10
        }
}
}
export default franciscoferro;