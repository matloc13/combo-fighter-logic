
const laserFlash = {
    fighter: 'Boris Wolfram',
    name: 'laser flash',
    copies: 6,
    starting: true,
    special: false,
    color: 'red',
    btnIcon: 'triangle',
    initiative: 7,
    openingDamage: 0,
    comboDamage: 2,
    comboBox: [
        {color: 'red', shape: 'triangle'},
        {color: 'red', shape: 'circle'},
        {color: 'blue', shape: 'square'}]
}

const headButt = {
    fighter: 'Boris Wolfram',
    name: 'head butt',
    copies: 6,
    starting: false,
    special: false,
    color: 'red',
    btnIcon: 'square',
    initiative: 4,
    openingDamage: 4,
    comboDamage: 3,
    comboBox: [
        {color: 'blue', shape: 'triangle'},
        {color: 'yellow', shape: 'triangle'},
        {color: 'yellow', shape: 'square'}]
}

const thunderClap = {
    fighter: 'Boris Wolfram',
    name: 'thunder clap',
    copies: 6,
    starting: true,
    special: false,
    color: 'red',
    btnIcon: 'circle',
    initiative: 2,
    openingDamage: 7,
    comboDamage: 3,
    comboBox: [
        {color: 'red', shape: 'triangle'},
        {color: 'red', shape: 'square'}]
}

const circle = {
    fighter: 'Boris Wolfram',
    name: 'circle',
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
        {color: 'blue', shape: 'square'}]
}

const stepBack = {
    fighter: 'Boris Wolfram',
    name: 'step back',
    copies: 5,
    starting: false,
    special: false,
    color: 'yellow',
    btnIcon: 'square',
    initiative: null,
    openingDamage: 0,
    comboDamage: 0,
    comboBox: [
        {color: 'red', shape: 'square'},
        {color: 'red', shape: 'circle'},
        {color: 'blue', shape: 'circle', special: true}]
}

const block = {
    fighter: 'Boris Wolfram',
    name: 'block',
    copies: 7,
    starting: true,
    special: false,
    color: 'blue',
    btnIcon: 'triangle',
    initiative: null,
    openingDamage: 0,
    comboDamage: 0,
    comboBox: [
        {color: 'red', shape: 'triangle'},
        {color: 'red', shape: 'square'},
        {color: 'yellow', shape: 'triangle'}]
}

const shoulderTackle = {
    fighter: 'Boris Wolfram',
    name: 'shoulder tackle',
    copies: 7,
    starting: true,
    special: false,
    color: 'blue',
    btnIcon: 'square',
    initiative: null,
    openingDamage: 0,
    comboDamage: 3,
    comboBox: [
        {color: 'yellow', shape: 'triangle'},
        {color: 'yellow', shape: 'square'}]
}

const rush = {
    fighter: 'Boris Wolfram',
    name: 'rush',
    copies: 6,
    starting: false,
    special: true,
    color: 'blue',
    btnIcon: 'circle',
    initiative: null,
    openingDamage: 0,
    comboDamage: 5,
    comboBox: [
        {color: 'blue', shape: 'triangle'},
        {color: 'blue', shape: 'square'},
        {color: 'blue', shape: 'circle', special: true}]
}

const borisWolfram = {
    name: 'Boris Wolfram',
    fightingStyle: 'Brawling',
    deck: [laserFlash, headButt, thunderClap, circle, stepBack, shoulderTackle, rush, block],
    token: 'a',
    a: {
        name: 'Uranium Capsule',
        text: 'Before drawing cards to refill your hand, you may discard 3 blue cards from your hand. If you do, flip this token to its B-side.'
    },
    b: {
        name: 'Powered by Radiation',
        text: 'In a Round where you deal at least 1 damage, add 2 to the total.'
    },
    signatureCombos: {
        drillAndBlast: {
            shape1: {color: 'blue', shape: 'triangle'},
            shape2: {color: 'yellow', shape:'triangle'},
            shape3: {color: 'blue', shape: 'square'},
            bonus: {color: 'yellow', shape: 'square'},
            damage: 6,
            bonusDamage: 10,
        },
        kievCoalTrain: {
            shape1: {color: 'blue', shape: 'circle', special: true},
            shape2: {color: 'blue', shape: 'triangle'},
            shape3: {color: 'red', shape: 'triangle'},
            bonus: {color: 'red', shape: 'triangle'},
            damage: 6,
            bonusDamage: 10,
        },
        ukranianHangover: {
            shape1: {color: 'blue', shape: 'square'},
            shape2: {color: 'yellow', shape: 'square'},
            shape3: {color: 'red', shape: 'circle',},
            bonus: {color: 'red', shape: 'square'},
            damage: 7,
            bonusDamage: 12,
        }
}
}
export default borisWolfram;