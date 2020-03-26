// Code your solutions in this file

function writeCards(name, event) {
  const giftCards = []
  
  for (let counter = 0; counter < name.length; counter++)
    {
      console.log(`Thank you, ${name[counter]}, for the wonderful ${event} gift!`);
    }
  return giftCards();
}

writeCards( [ 'Lisa', 'Kaitlin', 'Jan' ], 'surprise' );

