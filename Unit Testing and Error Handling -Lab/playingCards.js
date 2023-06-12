function playingCards(cardFace, cardSuit) {

    if (typeof cardFace === 'string') {
        cardFace = cardFace.toUpperCase();
    }
    cardSuit = cardSuit.toUpperCase();
    
    const validCardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    const cardSuits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663',
    }

    if (!validCardFaces.includes(cardFace) || !cardSuits[cardSuit]) {
        throw new TypeError;;
    }

    const card = {
        cardFace,
        cardSuit,
        toString() {
            return this.cardFace + cardSuits[this.cardSuit];
        }
    };

    return card;
}
//let card = playingCards('A', 'S');
//let card = playingCards('10', 'H');
let card = playingCards('1', 'C');
card.toString();