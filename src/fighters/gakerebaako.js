const elbow = {
    fighter: 'Gakere Baako',
    name: 'elbow',
    copies: 11,
    starting: true,
    special: false,
    color: 'red',
    btnIcon: 'triangle',
    initiative: 5,
    openingDamage: 3,
    comboDamage: 2,
    comboBox: [
        { color: 'blue', shape: 'triangle' },
        { color: 'yellow', shape: 'triangle' },
    ],
};

const hammerFist = {
    fighter: 'Gakere Baako',
    name: 'hammer fist',
    copies: 10,
    starting: true,
    special: false,
    color: 'red',
    btnIcon: 'square',
    initiative: 2,
    openingDamage: 5,
    comboDamage: 3,
    comboBox: [],
};

const mount = {
    fighter: 'Gakere Baako',
    name: 'mount',
    copies: 7,
    starting: true,
    special: false,
    color: 'yellow',
    btnIcon: 'triangle',
    initiative: null,
    openingDamage: 0,
    comboDamage: 0,
    comboBox: [
        { color: 'red', shape: 'triangle' },
        { color: 'red', shape: 'square' },
        { color: 'blue', shape: 'triangle' },
    ],
};

const roll = {
    fighter: 'Gakere Baako',
    name: 'roll',
    copies: 6,
    starting: false,
    special: true,
    color: 'yellow',
    btnIcon: 'circle',
    initiative: null,
    openingDamage: 0,
    comboDamage: 0,
    comboBox: [
        { color: 'blue', shape: 'triangle' },
        { color: 'blue', shape: 'cirlce' },
    ],
};

const block = {
    fighter: 'Gakere Baako',
    name: 'block',
    copies: 8,
    starting: true,
    special: false,
    color: 'blue',
    btnIcon: 'triangle',
    initiative: null,
    openingDamage: 0,
    comboDamage: 0,
    comboBox: [
        { color: 'red', shape: 'triangle' },
        { color: 'red', shape: 'square' },
        { color: 'yellow', shape: 'triangle' },
    ],
};

const wrestle = {
    fighter: 'Gakere Baako',
    name: 'wrestle',
    copies: 8,
    starting: true,
    special: true,
    color: 'blue',
    btnIcon: 'circle',
    initiative: null,
    openingDamage: 0,
    comboDamage: 0,
    comboBox: [
        { color: 'yellow', shape: 'triangle' },
        { color: 'yellow', shape: 'circle', special: true },
    ],
};

const gakerebaako = {
    name: 'Gakere Baako',
    fightingStyle: 'Wrestling',
    deck: [elbow, hammerFist, mount, roll, wrestle, block],
    token: 'a',
    a: {
        name: 'Poor Blocker',
        text:
            'In a Round where you take at least 1 damage, add 2 to the total damage taken, You cannot play Signature Combos. After you win a round playing Wrestle, immediately flip this token to its B-side.',
    },
    b: {
        name: 'Ground Fighter',
        text:
            'You are immune to damage. Your red cards deal triple damage. After you lose a round, flip this token to its A-side at the end of the Round.',
    },
    signatureCombos: {
        heelHook: {
            shape1: { color: 'yellow', shape: 'circle', special: true },
            shape2: { color: 'blue', shape: 'triangle' },
            shape3: { color: 'yellow', shape: 'triangle' },
            damage: 12,
        },
        armBar: {
            shape1: { color: 'yellow', shape: 'circle', special: true },
            shape2: { color: 'blue', shape: 'circle', special: true },
            shape3: { color: 'yellow', shape: 'triangle' },
            damage: 12,
        },
        triangleChoke: {
            shape1: { color: 'yellow', shape: 'circle', special: true },
            shape2: { color: 'blue', shape: 'circle', special: true },
            shape3: { color: 'yellow', shape: 'circle', special: true },
            shape4: { color: 'blue', shape: 'triangle' },
            damage: 25,
        },
    },
};
export default gakerebaako;
