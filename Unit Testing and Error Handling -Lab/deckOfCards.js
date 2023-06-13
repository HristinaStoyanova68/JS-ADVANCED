function printDeckOfCards(cards) {

    let result = [];

    for (const cardAsString of cards) {
        const face = cardAsString.slice(0, -1);
        //console.log(face);
        const suit = cardAsString.slice(-1);

        try {
            const card = playingCards(face, suit);
            result.push(card);
        } catch (err) {
            result = ['Invalid card: ' + cardAsString];
        }
    }

    console.log(result.join(' '));

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
            throw new TypeError;
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
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
//A♠ 10♦ K♥ 2♣
printDeckOfCards(['5S', '3D', 'QD', '1C']);
//Invalid card: 1C
printDeckOfCards(['5S', '3D', 'QD', '5X']);
