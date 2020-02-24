const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const ranks = Array.from({ length: 13 }, (v, i) => i + 1);
const rankNames = { 1: 'Ace', 11: 'Jack', 12: 'Queen', 13: 'King' };
const _suit = Symbol('suit');
const _rank = Symbol('rank');
const _wins = Symbol('wins');
class Card {
    constructor(suit, rank) {
        this[_suit] = suit;
        this[_rank] = rank;
    }
    get isFaceCard() {
        return this[_rank] === 1 || this[_rank] > 10;
    }
    toString() {
        return `${this.isFaceCard ? rankNames[this[_rank]] : this[_rank]} of ${this[_suit]}`;
    }
    static Compare(cardOne, cardTwo) {
        return Math.sign(cardOne[_rank] - cardTwo[_rank]);
    }
}
class Deck {
    constructor() {
        this.cards = [];
        for (let rank of ranks) {
            for (let suit of suits) {
                this.cards.push(new Card(suit, rank));
            }
        }
    }
    get count() {
        return this.cards.length;
    }
    shuffle() {
        for (let i = this.cards.count - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
    draw(n = 1) {
        return this.cards.splice(-n, n);
    }
}
class Player {
    constructor(name) {
        this.name = name;
        this[_wins] = 0;
        this.deck = new Deck();
        this.deck.shuffle();
    }
    get wins() {
        return this[_wins];
    }
    static Play(playerOne, playerTwo) {
        while (playerOne.deck.count && playerTwo.deck.count) {
            let playerWins = Card.Compare(playerOne.deck.draw(1)[0], playerTwo.deck.draw(1)[0]);
            if (playerWins === 1) {
                playerOne[_wins]++;
            } else if (playerWins === -1) {
                playerTwo[_wins]++;
            }
        }
        if (playerOne.wins > playerTwo.wins) {
            console.log(`${playerOne.name} wins ${playerOne.wins} to ${playerTwo.wins}`);
        } else if (playerOne.wins < playerTwo.wins) {
            console.log(`${playerTwo.name} wins ${playerTwo.wins} to ${playerOne.wins}`);
        } else {
            console.log(`Draw`);
        }
    }
}
const playerOne = new Player('John');
const playerTwo = new Player('Alex');
Player.Play(playerOne, playerTwo);