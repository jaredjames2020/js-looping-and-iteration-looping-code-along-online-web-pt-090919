// Code your solutions in this file

function writeCards(name, event) {
  const giftCards = []
  for (let counter = 0; counter < name.length; counter++){
      giftCards.push(`Thank you, ${name[counter]}, for the wonderful ${event} gift!`);
    }
  return giftCards;
}

function countDown (integer) {
    let i = integer;
    while (integer > 0) {
        console.log( integer )
        integer = integer - 1
    }
    console.log( integer );
}