/** C = Clubs
 *  D = Diamonds
 *  H = Hearts
 *  S = Spades
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    } 
    deck = _.shuffle(deck);
    console.log(deck);

    return deck;
}

crearDeck();

