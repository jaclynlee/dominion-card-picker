const ACTION = 'action';
const ATTACK = 'attack';
const DURATION = 'duration';
const REACTION = 'reaction';
const TREASURE = 'treasure';
const VICTORY = 'victory';

const BASE_GAME = 'Base Game';
const INTRIGUE = 'Intrigue';
const SEASIDE = 'Seaside';

const cards = [{
    name: 'Cutpurse',
    types: [ACTION, ATTACK],
    cost: 4,
    expansion: SEASIDE,
}, {
    name: 'Festival',
    types: [ACTION],
    cost: 5,
    expansion: BASE_GAME,
}, {
    name: 'Pirate Ship',
    types: [ACTION, ATTACK],
    cost: 4,
    expansion: SEASIDE,
}, {
    name: 'Ambassador',
    types: [ACTION, ATTACK],
    cost: 3,
    expansion: SEASIDE,
}, {
    name: 'Merchant Ship',
    types: [ACTION, DURATION],
    cost: 5,
    expansion: SEASIDE,
}, {
    name: 'Embargo',
    types: [ACTION],
    cost: 2,
    expansion: SEASIDE,
}, {
    name: 'Artisan',
    types: [ACTION],
    cost: 6,
    expansion: BASE_GAME,
}, {
    name: 'Swindler',
    types: [ACTION, ATTACK],
    cost: 3,
    expansion: INTRIGUE,
}, {
    name: 'Moat',
    types: [ACTION, REACTION],
    cost: 2,
    expansion: BASE_GAME,
}, {
    name: 'Harem',
    types: [TREASURE, VICTORY],
    cost: 6,
    expansion: INTRIGUE,
}, {
    name: 'Gardens',
    types: [VICTORY],
    cost: 4,
    expansion: BASE_GAME,
}, {
    name: 'Trading Post',
    types: [ACTION],
    cost: 5,
    expansion: INTRIGUE,
}, {
    name: 'Mill',
    types: [ACTION, VICTORY],
    cost: 4,
    expansion: INTRIGUE,
}, {
    name: 'Duke',
    types: [VICTORY],
    cost: 5,
    expansion: INTRIGUE,
}, {
    name: 'Nobles',
    types: [ACTION, VICTORY],
    cost: 6,
    expansion: INTRIGUE
}, {
    name: 'Bureaucrat',
    types: [ACTION, ATTACK],
    cost: 4,
    expansion: BASE_GAME,
}];
