var shuffledCards = shuffle(cards)
//      .filter(function(card) {
//         return card.types.includes(ATTACK);
//     })
    .slice(0,10)
    .sort(compareCards);

for (var listCard of shuffledCards) {
    printCard(listCard);
}

// Returns a shuffled copy of the array
function shuffle(array) {
    // An inefficient but concise way to shuffle an array
    return array.map(it => ({item: it, n: Math.random()})).sort((a,b) => a.n - b.n).map(it => it.item);
}

function compareCards(cardA, cardB) {
    if (cardA.cost < cardB.cost) {
        return -1;
    } else if (cardB.cost < cardA.cost) {
        return 1;
    } else {
        return cardA.name.localeCompare(cardB.name);
    }
}

function printCard(listCard) {
    var liElement = document.createElement('li');
    liElement.classList.add('card');
    liElement.appendChild(createCoinElement(listCard.cost));
    liElement.appendChild(document.createTextNode(' ' + listCard.name + ' (' + listCard.expansion + ')'));
    var ulElement = document.getElementById('cardList');
    ulElement.appendChild(liElement);
}

function createCoinElement(value) {
    const coinSpan = document.createElement('span');
    coinSpan.classList.add('coin');
    coinSpan.innerHTML = `<span>${value}</span>`
    return coinSpan;
}
