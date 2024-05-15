"use strict"

class Card {
  constructor(val, suit) {
    this.val = val;
    this.suit = suit;
  }
}

class Deck {
  constructor() {
    this.deck = this.createDeck();
  }

  createDeck() {
    const SUITS = ['diamonds', 'hearts', 'clubs', 'spades'];
    const STR_VALS = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

    const deck = [];
    for (const suit of SUITS) {
      for (const val of STR_VALS) {
        let newCard = new Card (val, suit);
        deck.push(newCard);
      }
    }
    return deck;
  }

  shuffle() {
    let shuffled = Array.from({length: this.deck.length});
    let availCardIdxs = Array.from({length: this.deck.length}, (v, i) => i);
    
    for (const d of this.deck) {
      let randomIdx = Math.floor(Math.random() * availCardIdxs.length);
      let newCardIdx = availCardIdxs[randomIdx];
      availCardIdxs.splice(randomIdx, 1);
      shuffled[newCardIdx] = d;
    }
    this.deck = shuffled; 
  }

  draw() {
    if (!this.deck.length) throw new Error('No more cards');
    return this.deck.pop();
  }
}

class BlackJack {
  constructor() {
    this.deck = new Deck();
    this.playersHand = this.setUpHand();
    this.dealersHand = this.setUpHand();
    this.playerScore = this.scoreHand(this.playersHand);
    this.dealerScore = this.scoreHand(this.dealersHand);
    this.winner = null;
  }

  setUpHand() {
    this.deck.shuffle();
    return [this.deck.draw(), this.deck.draw()];
  }

  playMove(action) {
    if (action === 'draw') {
      this.deal();

      console.log('playersHand=', this.playersHand);
      this.playerScore = this.scoreHand(this.playersHand);
      
      if (this.playerScore > 21) {
        this.winner = 'dealer';
        this.endGame();
      }
    
    } else if (action === 'stop') {
      this.checkWinner();
      this.endGame();
    }
  }

  deal() {
    this.playersHand.push(this.deck.draw());
  }

  scoreHand(hand) {
    console.log('hand=', hand);
    let numAces = 0;
    let score = 0;
    for (let c of hand) {
      if (c.val === 'J' || c.val === 'Q' || c.val === 'K') {
        score += 10;
      } else if (c.val === 'A') {
        numAces++;
        continue;
      } else score += c.val;
    }
    if (numAces) {
      for (let i = 0; i < numAces; i++) {
        if (score <= 10) score += 11;
        else score += 1;
      }
    }
    return score;
  }

  checkWinner() {
    this.winner = this.playerScore > this.dealerScore ? 'player' : 'dealer';
  }

  endGame() {
    let msg = this.winner === 'player' ? 'You win!' : 'Try again!';
    console.log(msg);
  }
}