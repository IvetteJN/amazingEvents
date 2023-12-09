//CREATE DYNAMIC CARDS AND 'MORE DETAILS' FUNCTION

function createCard(arrayEvents){
  let card = ''
  for (const event of arrayEvents) {
    if(event.date < APIdata.currentDate){
          card += getEvent(event)
  }
}
  return card
}