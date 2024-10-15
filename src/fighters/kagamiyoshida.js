const stickyHands = {
    fighter: 'Kagami Yoshida',
    name: 'sticky hands',
    copies: 10,
    starting: true,
    special: false,
    color: 'red',
    btnIcon: 'triangle',
    initiative: 5,
    openingDamage: 0,
    comboDamage: 0,
    comboBox: [
        { color: 'blue', shape: 'square' },
        { color: 'yellow', shape: 'circle', special: true },
    ],
};

const lead = {
    fighter: 'Kagami Yoshida',
    name: 'lead',
    copies: 7,
    starting: true,
    special: false,
    color: 'yellow',
    btnIcon: 'triangle',
    initiative: null,
    openingDamage: 'x',
    comboDamage: 0,
    comboBox: [
        { color: 'red', shape: 'triangle' },
        { color: 'yellow', shape: 'square' },
    ],
};

const evade = {
    fighter: 'Kagami Yoshida',
    name: 'evade',
    copies: 7,
    starting: false,
    special: false,
    color: 'yellow',
    btnIcon: 'square',
    initiative: null,
    openingDamage: 0,
    comboDamage: 0,
    comboBox: [
        { color: 'blue', shape: 'square' },
        { color: 'yellow', shape: 'circle', special: true },
    ],
};

const follow = {
    fighter: 'Kagami Yoshida',
    name: 'follow',
    copies: 8,
    starting: true,
    special: true,
    color: 'yellow',
    btnIcon: 'triangle',
    initiative: null,
    openingDamage: 0,
    comboDamage: 'x',
    comboBox: [
        { color: 'red', shape: 'triangle' },
        { color: 'blue', shape: 'triangle' },
        { color: 'yellow', shape: 'square' },
    ],
};

const deflect = {
    fighter: 'Kagami Yoshida',
    name: 'deflect',
    copies: 9,
    starting: true,
    special: false,
    color: 'blue',
    btnIcon: 'triangle',
    initiative: null,
    openingDamage: 'x',
    comboDamage: 0,
    comboBox: [
        { color: 'red', shape: 'triangle' },
        { color: 'yellow', shape: 'square' },
    ],
};

const direct = {
    fighter: 'Kagami Yoshida',
    name: 'direct',
    copies: 9,
    starting: true,
    special: false,
    color: 'blue',
    btnIcon: 'square',
    initiative: null,
    openingDamage: 0,
    comboDamage: 'x',
    comboBox: [
        { color: 'red', shape: 'triangle' },
        { color: 'yellow', shape: 'triangle' },
    ],
};

const kagamiyoshida = {
    name: 'Kagami Yoshida',
    fightingStyle: 'Aikido',
    deck: [stickyHands, lead, evade, follow, deflect, direct],
    token: 'a',
    a: {
        name: 'Reverse Force',
        text:
            "The following rules apply to the reverse side of the token. Once you know the rules, flip this token to its B-side. X = the highest damage value on your opponent's card. After you win a round, rotate this token 90 degrees. Rotate it 180 degrees if you play a Signature Combo. Everytime you fail to win a Round, reset the token back to position 1. If you manage to rotate this token 4 or more steps, back to position 1. You win the game!",
    },
    b: {
        name: 'Path to Victory',
        text: '',
    },
    signatureCombos: {
        hipThrow: {
            shape1: { color: 'yellow', shape: 'triangle' },
            shape2: { color: 'red', shape: 'triangle' },
            shape3: { color: 'blue', shape: 'square' },
            damage: 0,
        },
        wristThrow: {
            shape1: { color: 'yellow', shape: 'square' },
            shape2: { color: 'blue', shape: 'square' },
            shape3: { color: 'yellow', shape: 'triangle' },
            damage: 0,
        },
        puppetMaster: {
            shape1: { color: 'yellow', shape: 'circle', special: true },
            shape2: { color: 'blue', shape: 'triangle' },
            shape3: { color: 'yellow', shape: 'square' },
            damage: 0,
        },
    },
};
export default kagamiyoshida;
