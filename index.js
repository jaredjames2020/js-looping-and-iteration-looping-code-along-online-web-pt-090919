// Code your solutions in this file

function writeCards(name, event) {
  for(let counter = 0; counter <= writeCards.length; counter++)
  {
    console.log(`Thank you, ${name[counter]}, for the wonderful ${event} gift!`);
  }
  return writeCards( );
}

writeCards( [ 'Lisa', 'Kaitlin', 'Jan' ], 'surprise' );

